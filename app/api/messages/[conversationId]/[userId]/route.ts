import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";

export async function PATCH(
  req: Request,
  { params }: { params: { conversationId: string; userId: string } }
) {
  const { conversationId, userId } = params;

  try {
    const conversation = await prisma.conversation.findUnique({
      where: { conversationId },
      select: {
        messages: {
          where: {
            AND: [
              { read: { equals: false } },
              { sendedByID: { not: { equals: userId } } },
            ],
          },
          select: { id: true },
        },
      },
    });
    const unreadMessagesCount = conversation?.messages.length;
    if (unreadMessagesCount && unreadMessagesCount > 0) {
      pusherServer.trigger(
        `unread-messages-count-${userId}`,
        "user-read-messages",
        unreadMessagesCount
      );
    }

    await prisma.conversation.update({
      where: { conversationId },
      data: {
        messages: {
          updateMany: {
            where: {
              AND: [
                { read: { equals: false } },
                { sendedByID: { not: { equals: userId } } },
              ],
            },
            data: {
              read: true,
            },
          },
        },
      },
    });
    return new NextResponse("Updated successfully", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

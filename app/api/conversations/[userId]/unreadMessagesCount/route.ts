import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    const conversations = await prisma.conversation.findMany({
      where: {
        usersPair: { some: { id: userId } },
      },
      select: {
        _count: {
          select: {
            messages: {
              where: {
                AND: [
                  { read: { equals: false } },
                  { sendedBy: { id: { not: { equals: userId } } } },
                ],
              },
            },
          },
        },
      },
    });
    const unReadMessagesCount = conversations.reduce(
      (sum, el) => sum + el._count.messages,
      0
    );

    return new NextResponse(JSON.stringify(unReadMessagesCount), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

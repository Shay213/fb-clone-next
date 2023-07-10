import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { NotificationType } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const {
      type,
      receiverId,
      senderId,
    }: { type: NotificationType; receiverId?: string; senderId: string } =
      await req.json();

    if (type === "FRIEND_NEW_POST") {
      const user = await prisma.user.findUnique({
        where: { id: senderId },
        select: {
          friends: {
            select: {
              id: true,
            },
          },
        },
      });
      const userFriends = user?.friends.map((f) => f.id) || [];
      await prisma.notification.create({
        data: {
          type,
          senderId,
          receiversIds: userFriends,
        },
      });
    } else {
      await prisma.notification.create({
        data: {
          type,
          senderId,
          receivers: { connect: { id: receiverId } },
        },
      });
    }
    return new NextResponse("Notification sended successfully", {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

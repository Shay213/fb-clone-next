import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { NotificationType, Notification } from "@prisma/client";
import { pusherServer } from "@/lib/pusher";
import { nanoid } from "nanoid";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const {
      type,
      receiverId,
      senderId,
    }: { type: NotificationType; receiverId?: string; senderId: string } =
      await req.json();

    const user = await prisma.user.findUnique({
      where: { id: senderId },
      select: {
        friends: {
          select: {
            id: true,
          },
        },
        id: true,
        picture: true,
        firstName: true,
        lastName: true,
      },
    });

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const receiversIds: string[] =
      type === "FRIEND_NEW_POST"
        ? user?.friends.map((f) => f.id) || []
        : [receiverId as string];
    const notificationId = new ObjectId().toString();

    const notification: Notification & {
      sender: {
        id: string;
        picture: string | null;
        firstName: string;
        lastName: string;
      };
    } = {
      id: notificationId,
      new: true,
      read: false,
      seen: false,
      type,
      senderId,
      receiversIds,
      createdAt: new Date(),
      sender: {
        id: user.id,
        picture: user.picture,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };

    receiversIds.forEach((id) => {
      pusherServer.trigger(
        `notifications-${id}`,
        "incoming-notifications",
        notification
      );
      pusherServer.trigger(
        `notifications-count-${id}`,
        "new-notifications-count",
        {}
      );
    });

    await prisma.notification.create({
      data: {
        id: notificationId,
        type,
        senderId,
        receiversIds,
      },
    });

    return new NextResponse("Notification sended successfully", {
      status: 200,
    });
  } catch (error: any) {
    console.log("ERROR MESSAGE: " + error);
    return new NextResponse(error.message, { status: 400 });
  }
}

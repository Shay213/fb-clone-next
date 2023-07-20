import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { ObjectId } from "mongodb";
import { Message } from "@prisma/client";
import { pusherServer } from "@/lib/pusher";

export async function POST(req: Request) {
  try {
    const { senderId, receiverId, description } = await req.json();

    const conversationId = [senderId, receiverId].sort().join();
    const messageId = new ObjectId().toString();

    const newMessage: Message = {
      conversationID: conversationId,
      createdAt: new Date(),
      description,
      id: messageId,
      read: false,
      sendedByID: senderId,
    };

    pusherServer.trigger(`messages-${senderId}`, "new-message", newMessage);
    pusherServer.trigger(`messages-${receiverId}`, "new-message", newMessage);
    pusherServer.trigger(`chats-${receiverId}`, "new-message", {
      m: newMessage,
      conversationId,
    });
    pusherServer.trigger(`chats-${senderId}`, "new-message", {
      m: newMessage,
      conversationId,
    });
    pusherServer.trigger(
      `unread-messages-count-${receiverId}`,
      "new-unread-message",
      {}
    );

    await prisma.message.create({
      data: {
        id: messageId,
        description,
        conversation: { connect: { conversationId } },
        sendedBy: { connect: { id: senderId } },
      },
    });
    return new NextResponse("Message sended successfully", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

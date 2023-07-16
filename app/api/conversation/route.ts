import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId, friendId } = await req.json();

    const conversationId = [userId, friendId].sort().join();

    const conversation = await prisma.conversation.findUnique({
      where: { conversationId },
    });

    if (conversation) {
      return new NextResponse("Conversation already exists", { status: 200 });
    }

    await prisma.conversation.create({
      data: {
        conversationId,
        usersPair: { connect: { id: userId } },
      },
    });
    await prisma.conversation.update({
      where: { conversationId },
      data: {
        usersPair: { connect: { id: friendId } },
      },
    });
    return new NextResponse("Conversation created successfully", {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error.message, { status: 400 });
  }
}

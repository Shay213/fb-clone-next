import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const message = await prisma.message.create({
      data: {
        description: body.description,
        sendedBy: { connect: { id: body.userId } },
        conversation: {
          connect: { conversationID: body.userId + body.friendId },
        },
      },
    });
    await prisma.message.update({
      where: { id: message.id },
      data: {
        conversation: {
          connect: { conversationID: body.friendId + body.userId },
        },
      },
    });
    const userEmail = await prisma.user.findUnique({
      where: { id: body.userId },
      select: { email: true },
    });

    return new NextResponse(
      JSON.stringify({ message: "Message sended successfully" }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

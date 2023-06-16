import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";

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

    revalidateTag(body.userId + body.friendId);
    revalidateTag(body.friendId + body.userId);

    return NextResponse.json("Message sended successfully");
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

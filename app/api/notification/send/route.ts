import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    await prisma.notification.create({
      data: {
        sender: { connect: { email: body.senderEmail } },
        receiver: { connect: { id: body.receiverId } },
        type: body.type,
      },
    });
    return NextResponse.json("Notification sended successfully");
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

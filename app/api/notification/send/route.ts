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
    return new NextResponse(
      JSON.stringify({ message: "Notification sended successfully" }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(req: Request) {
  const body = await req.json();

  try {
    await prisma.notification.update({
      where: {
        id: body.id,
      },
      data: {
        new: body.new,
        read: body.read,
      },
    });
    return new NextResponse(
      JSON.stringify({ message: "Notification updated successfully" }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

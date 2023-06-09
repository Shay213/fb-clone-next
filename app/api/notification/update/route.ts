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
    return NextResponse.json("Notification updated successfully");
  } catch (error) {
    return NextResponse.error();
  }
}

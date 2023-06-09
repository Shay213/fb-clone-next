import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(req: Request) {
  const currentDate = new Date();
  const oneDayAgo = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
  try {
    await prisma.notification.updateMany({
      where: {
        createdAt: {
          lt: oneDayAgo,
        },
      },
      data: {
        new: false,
      },
    });
    return NextResponse.json("Updated new notifications successfully");
  } catch (error) {
    return NextResponse.error();
  }
}

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
    return new NextResponse("Updated new notifications successfully", {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

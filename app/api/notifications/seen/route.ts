import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(req: Request) {
  try {
    const { userId } = await req.json();
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        receivedNotificationsIDs: true,
      },
    });
    const receivedNotificationsIDs = user?.receivedNotificationsIDs || [];
    await prisma.user.updateMany({
      where: { id: userId },
      data: {
        seenNotificationsIDs: { set: receivedNotificationsIDs },
      },
    });
    return new NextResponse("Updated seen notifications", { status: 200 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error.message, { status: 400 });
  }
}

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        receivedNotifications: {
          where: {
            seenBy: { none: { id: { equals: userId } } },
          },
          select: { id: true },
        },
      },
    });

    return new NextResponse(
      JSON.stringify({
        notificationsCount: user?.receivedNotifications?.length,
      }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

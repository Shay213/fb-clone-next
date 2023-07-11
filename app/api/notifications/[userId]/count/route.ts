import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  try {
    const notifications = await prisma.notification.findMany({
      where: {
        AND: [{ receiversIds: { has: userId } }, { seen: { equals: false } }],
      },
      select: {
        id: true,
      },
    });

    return new NextResponse(
      JSON.stringify({ notificationsCount: notifications.length }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

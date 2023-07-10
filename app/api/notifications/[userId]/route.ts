import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  try {
    const notifications = await prisma.notification.findMany({
      where: { receiversIds: { has: userId } },
      include: {
        sender: {
          select: {
            id: true,
            picture: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    return new NextResponse(JSON.stringify(notifications), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { userEmail: string } }
) {
  const { userEmail } = params;

  try {
    const notifications = await prisma.notification.findMany({
      where: {
        AND: [
          { receiver: { email: { equals: userEmail } } },
          { new: { equals: false } },
        ],
      },
      include: {
        sender: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(notifications);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

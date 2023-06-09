import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { userEmail: string } }
) {
  const { userEmail } = params;
  try {
    const count = await prisma.notification.count({
      where: {
        AND: [{ receiver: { email: userEmail } }, { seen: false }],
      },
    });
    return NextResponse.json(count);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { userEmail: string } }
) {
  const { userEmail } = params;

  try {
    await prisma.notification.updateMany({
      where: {
        receiver: { email: userEmail },
      },
      data: {
        seen: true,
      },
    });
    return NextResponse.json("Updated successfully");
  } catch (error) {
    return NextResponse.error();
  }
}

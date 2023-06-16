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
    return new NextResponse(JSON.stringify(count), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
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
    return new NextResponse(
      JSON.stringify({ message: "Updated successfully" }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

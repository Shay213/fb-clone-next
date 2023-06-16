import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { friendId: string; email: string } }
) {
  const { email, friendId } = params;

  try {
    const isFriend = await prisma.user.findFirst({
      where: {
        AND: [{ email }, { friends: { some: { id: friendId } } }],
      },
    });
    if (isFriend) {
      return new NextResponse(JSON.stringify(true), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify(false), { status: 200 });
    }
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

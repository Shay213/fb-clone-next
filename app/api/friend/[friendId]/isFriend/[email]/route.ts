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
        AND: [{ email }, { friends: { some: { friend: { id: friendId } } } }],
      },
    });
    if (isFriend) {
      return NextResponse.json(true);
    } else {
      return NextResponse.json(false);
    }
  } catch (error) {
    return NextResponse.error();
  }
}

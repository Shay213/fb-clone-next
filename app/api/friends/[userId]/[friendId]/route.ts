import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { userId: string; friendId: string } }
) {
  const { friendId, userId } = params;

  try {
    const user = await prisma.user.findFirst({
      where: {
        AND: [
          { id: userId },
          { friends: { some: { id: { equals: friendId } } } },
        ],
      },
    });
    return new NextResponse(JSON.stringify({ alreadyFriends: !!user }), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

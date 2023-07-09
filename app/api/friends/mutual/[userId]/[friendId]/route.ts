import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { userId: string; friendId: string } }
) {
  const { friendId, userId } = params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        friends: {
          select: { id: true },
        },
      },
    });
    const userFriendsIds = user?.friends.map((friend) => friend.id) || [];

    const friend = await prisma.user.findUnique({
      where: {
        id: friendId,
      },
      select: {
        friends: {
          where: {
            id: { in: userFriendsIds },
          },
          select: {
            id: true,
            picture: true,
            firstName: true,
            lastName: true,
          },
          take: 5,
        },
      },
    });
    const mutualFriends = friend?.friends || [];
    return new NextResponse(JSON.stringify(mutualFriends), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { friendId: string; email: string } }
) {
  const { email, friendId } = params;

  try {
    const userFriends = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        friends: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!userFriends?.friends) {
      return NextResponse.json([]);
    }

    const userFriendsIds = userFriends.friends.map((friend) => friend.id);

    const mutualFriends = await prisma.user.findUnique({
      where: {
        id: friendId,
      },
      select: {
        friends: {
          where: {
            friend: {
              id: {
                in: userFriendsIds,
              },
            },
          },
          select: {
            friend: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });
    return NextResponse.json(mutualFriends?.friends);
  } catch (error) {
    return NextResponse.error();
  }
}

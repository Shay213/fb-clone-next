import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";

export async function PATCH(req: Request) {
  try {
    const { userId, friendId } = await req.json();

    await prisma.user.update({
      where: { id: userId },
      data: {
        friends: { connect: { id: friendId } },
        friendOf: { connect: { id: friendId } },
      },
    });
    await prisma.user.update({
      where: { id: friendId },
      data: {
        friends: { connect: { id: userId } },
        friendOf: { connect: { id: userId } },
      },
    });
    const userPosts = await prisma.post.findMany({
      where: {
        OR: [
          { author: { id: { equals: userId } } },
          { audience: { equals: "PUBLIC" } },
          {
            AND: [
              { audience: { equals: "FRIENDS" } },
              { author: { friendsIDs: { hasSome: userId } } },
            ],
          },
        ],
      },
      include: {
        author: {
          select: {
            id: true,
            picture: true,
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    const friendPosts = await prisma.post.findMany({
      where: {
        OR: [
          { author: { id: { equals: friendId } } },
          { audience: { equals: "PUBLIC" } },
          {
            AND: [
              { audience: { equals: "FRIENDS" } },
              { author: { friendsIDs: { hasSome: friendId } } },
            ],
          },
        ],
      },
      include: {
        author: {
          select: {
            id: true,
            picture: true,
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    pusherServer.trigger(
      `feed-${userId}`,
      "update-feed-added-friend",
      userPosts
    );
    pusherServer.trigger(
      `feed-${friendId}`,
      "update-feed-added-friend",
      friendPosts
    );

    return new NextResponse("Sended friend request successfully", {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

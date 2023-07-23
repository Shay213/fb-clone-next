import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";

export async function PATCH(req: Request) {
  try {
    const { postId, userId } = await req.json();

    const isPostLikedByUserId = await prisma.post.findFirst({
      where: {
        id: postId,
        likedBy: { some: { id: userId } },
      },
    });

    // Find all feeds that this post is displayed in
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    let feedIds: string[] = [];

    switch (post?.audience) {
      case "FRIENDS":
        const user = await prisma.user.findUnique({
          where: { id: post.authorId },
          select: { friendsIDs: true },
        });
        feedIds = user?.friendsIDs || [];
        break;
      case "PUBLIC":
        const users = await prisma.user.findMany({ select: { id: true } });
        feedIds = users.map((user) => user.id);
        break;
      case "ONLY_ME":
        feedIds = [userId];
        break;
    }

    if (isPostLikedByUserId) {
      // dislike
      feedIds.forEach((feedId) => {
        pusherServer.trigger(`feed-${feedId}`, "update-feed-post-disliked", {
          postId,
          dislikedById: userId,
        });
      });

      await prisma.post.update({
        where: { id: postId },
        data: {
          likedBy: { disconnect: { id: userId } },
        },
      });
    } else {
      // like
      feedIds.forEach((feedId) => {
        pusherServer.trigger(`feed-${feedId}`, "update-feed-post-liked", {
          postId,
          likedById: userId,
        });
      });
      await prisma.post.update({
        where: { id: postId },
        data: {
          likedBy: { connect: { id: userId } },
        },
      });
    }

    return new NextResponse("Liked post successfully", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

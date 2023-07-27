import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { ExtendedComment } from "@/app/actions/getPostComments";
import { ObjectId } from "mongodb";
import { pusherServer } from "@/lib/pusher";

export async function POST(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;

  try {
    const { description, postedById } = await req.json();
    const commentId = new ObjectId().toString();

    const postedBy = await prisma.user.findUnique({
      where: { id: postedById },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        picture: true,
      },
    });

    if (!postedBy) {
      return new NextResponse("Not authorized", { status: 401 });
    }

    const comment: ExtendedComment = {
      id: commentId,
      createdAt: new Date(),
      description,
      postedBy,
      postId,
      rootCommentID: null,
      postedByID: postedById,
      likedByIDs: [],
    };

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
        feedIds = [postedById];
        break;
    }

    feedIds.forEach((feedId) => {
      pusherServer.trigger(`feed-${feedId}`, "update-feed-new-post-comment", {
        c: comment,
        postId,
      });
    });

    await prisma.comment.create({
      data: {
        id: commentId,
        description,
        post: { connect: { id: postId } },
        postedBy: { connect: { id: postedById } },
      },
    });

    return new NextResponse("Comment added successfully", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

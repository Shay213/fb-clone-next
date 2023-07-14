import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Audience } from "@prisma/client";
import { Post } from "@prisma/client";
import { ObjectId } from "mongodb";
import { pusherServer } from "@/lib/pusher";

type ExtendedPost = Post & {
  author: {
    id: string;
    firstName: string;
    lastName: string;
    picture: string | null;
  };
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let audience;

    switch (body.audience) {
      case "public":
        audience = Audience.PUBLIC;
        break;
      case "friends":
        audience = Audience.FRIENDS;
        break;
      case "only me":
        audience = Audience.ONLY_ME;
        break;
    }

    if (!audience) {
      return new NextResponse("Audience not specified", { status: 400 });
    }

    const author = await prisma.user.findUnique({
      where: { id: body.authorId },
      select: {
        friends: {
          select: { id: true },
        },
        firstName: true,
        lastName: true,
        picture: true,
      },
    });

    if (!author) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const authorFriendsIds = author?.friends.map((f) => f.id) || [];
    const postId = new ObjectId().toString();

    const post: ExtendedPost = {
      audience,
      authorId: body.authorId,
      createdAt: new Date(),
      description: body.description,
      img: body.img,
      id: postId,
      likedByIDs: [],
      updatedAt: new Date(),
      author: {
        id: body.authorId,
        firstName: author.firstName,
        lastName: author.lastName,
        picture: author.picture,
      },
    };

    [...authorFriendsIds, body.authorId].forEach((id) => {
      pusherServer.trigger(`feed-${id}`, "update-feed", post);
    });

    await prisma.post.create({
      data: {
        id: postId,
        audience,
        description: body.description,
        author: { connect: { id: body.authorId } },
        img: body.img,
      },
    });
    return new NextResponse("Post added successfully.", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

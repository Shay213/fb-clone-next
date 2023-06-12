import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const alreadyLiked = await prisma.user.findFirst({
      where: {
        likedPosts: { some: { id: body.postId } },
      },
    });

    if (alreadyLiked) {
      await prisma.user.update({
        where: { email: body.userEmail },
        data: {
          likedPosts: { disconnect: { id: body.postId } },
        },
      });
      await prisma.post.update({
        where: { id: body.postId },
        data: {
          likedBy: { disconnect: { email: body.userEmail } },
        },
      });
      return NextResponse.json("Disliked");
    } else {
      await prisma.user.update({
        where: { email: body.userEmail },
        data: {
          likedPosts: { connect: { id: body.postId } },
        },
      });
      await prisma.post.update({
        where: { id: body.postId },
        data: {
          likedBy: { connect: { email: body.userEmail } },
        },
      });

      return NextResponse.json("Liked");
    }
  } catch (error) {
    return NextResponse.error();
  }
}

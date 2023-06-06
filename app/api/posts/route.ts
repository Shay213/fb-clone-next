import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    // TODO,
    // CHECK IF AUTHOR AND CURR USER ARE FRIENDS
    // SELECT PUBLIC POSTS
    // SELECT IMG FOR USER
    const posts = await prisma.post.findMany({
      select: {
        author: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        id: true,
        img: true,
        createdAt: true,
        audience: true,
        description: true,
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

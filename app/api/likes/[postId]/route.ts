import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      select: {
        _count: { select: { likedBy: true } },
      },
    });

    if (!post) {
      return NextResponse.error();
    }

    return NextResponse.json(post._count.likedBy);
  } catch (error) {
    return NextResponse.error();
  }
}

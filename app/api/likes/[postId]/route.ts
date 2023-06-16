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
      return new NextResponse(JSON.stringify({ message: "Not found" }), {
        status: 400,
      });
    }

    return new NextResponse(JSON.stringify(post._count.likedBy), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

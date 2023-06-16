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
        author: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
    return new NextResponse(JSON.stringify(post?.author), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

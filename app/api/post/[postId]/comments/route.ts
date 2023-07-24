import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;
  const { searchParams } = new URL(req.url);
  const count = searchParams.get("count");
  const numOfComments = count ? +count : 1;
  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
      select: {
        comments: {
          take: numOfComments,
          include: {
            postedBy: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                picture: true,
              },
            },
          },
        },
      },
    });
    const comments = post?.comments || [];

    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

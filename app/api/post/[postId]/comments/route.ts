import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;
  const { searchParams } = new URL(req.url);
  const stringTake = searchParams.get("take");
  const stringSkip = searchParams.get("skip");
  const take = stringTake ? parseInt(stringTake) : undefined;
  const skip = stringSkip ? parseInt(stringSkip) : undefined;
  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
      select: {
        comments: {
          take,
          skip,
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

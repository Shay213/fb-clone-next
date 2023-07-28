import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;
  const { searchParams } = new URL(req.url);
  const excludeIdsString = searchParams.get("excludeIds");
  const excludeIds = excludeIdsString ? excludeIdsString.split(",") : [];
  const takeString = searchParams.get("take");
  const take = takeString ? parseInt(takeString) : undefined;
  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
      select: {
        comments: {
          take,
          where: {
            id: { notIn: excludeIds },
          },
          orderBy: { createdAt: "desc" },
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

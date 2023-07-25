import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;

  try {
    const { description, postedById } = await req.json();
    await prisma.comment.create({
      data: {
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

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    const posts = await prisma.post.findMany({
      where: {
        OR: [
          { author: { id: { equals: userId } } },
          { audience: { equals: "PUBLIC" } },
          {
            AND: [
              { audience: { equals: "FRIENDS" } },
              { author: { friendsIDs: { hasSome: userId } } },
            ],
          },
        ],
      },
      include: {
        author: {
          select: {
            id: true,
            picture: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

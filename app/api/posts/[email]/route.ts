import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { email: string } }
) {
  const { email } = params;
  try {
    const posts = await prisma.post.findMany({
      where: {
        OR: [
          { author: { email } },
          {
            AND: [
              { audience: "FRIENDS" },
              { author: { friendOf: { some: { email } } } },
            ],
          },
          { audience: "PUBLIC" },
        ],
      },
      select: {
        author: {
          select: {
            id: true,
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
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

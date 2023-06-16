import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { friendId: string; email: string } }
) {
  const { email, friendId } = params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        friends: {
          where: { friendOf: { some: { id: friendId } } },
        },
      },
    });

    return new NextResponse(JSON.stringify(user?.friends), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

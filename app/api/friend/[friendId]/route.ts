import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { friendId: string } }
) {
  const { friendId } = params;

  try {
    const friend = await prisma.user.findUnique({
      where: { id: friendId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
      },
    });
    return NextResponse.json(friend);
  } catch (error) {
    return NextResponse.error();
  }
}

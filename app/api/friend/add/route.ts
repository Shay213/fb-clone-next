import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    await prisma.user.update({
      where: { id: body.currUserId },
      data: {
        friends: { connect: { id: body.friendId } },
        friendOf: { connect: { id: body.friendId } },
      },
    });
    await prisma.user.update({
      where: { id: body.friendId },
      data: {
        friends: { connect: { id: body.currUserId } },
        friendOf: { connect: { id: body.currUserId } },
      },
    });
    return new NextResponse(
      JSON.stringify({ message: "Friend added successfully" }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const friend = await prisma.friend.create({
      data: {
        friend: { connect: { id: body.friendId } },
      },
      select: {
        id: true,
      },
    });
    await prisma.user.update({
      where: { email: body.email },
      data: {
        friends: { connect: { id: friend.id } },
      },
    });
    return NextResponse.json("Friend added successfully");
  } catch (error) {
    return NextResponse.error();
  }
}

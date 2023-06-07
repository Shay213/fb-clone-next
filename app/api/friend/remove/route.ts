import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(req: Request) {
  const body = await req.json();

  try {
    const friendship = await prisma.user.findFirst({
      where: { email: body.email },
      select: {
        friends: { where: { friendId: body.friendId }, select: { id: true } },
      },
    });
    await prisma.friend.delete({
      where: {
        id: friendship?.friends[0].id,
      },
    });
    return NextResponse.json("Friend deleted successfully");
  } catch (error) {
    return NextResponse.error();
  }
}

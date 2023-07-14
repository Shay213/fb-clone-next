import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(req: Request) {
  try {
    const { userId, friendId } = await req.json();
    await prisma.user.update({
      where: { id: userId },
      data: {
        friends: { connect: { id: friendId } },
        friendOf: { connect: { id: friendId } },
      },
    });
    await prisma.user.update({
      where: { id: friendId },
      data: {
        friends: { connect: { id: userId } },
        friendOf: { connect: { id: userId } },
      },
    });

    return new NextResponse("Sended friend request successfully", {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

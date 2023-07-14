import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(req: Request) {
  try {
    const { userId, friendId } = await req.json();

    await prisma.user.update({
      where: { id: userId },
      data: {
        friends: { disconnect: { id: friendId } },
        friendOf: { disconnect: { id: friendId } },
      },
    });
    await prisma.user.update({
      where: { id: friendId },
      data: {
        friends: { disconnect: { id: userId } },
        friendOf: { disconnect: { id: userId } },
      },
    });

    return new NextResponse("Removed friend successfully", {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

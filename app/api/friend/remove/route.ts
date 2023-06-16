import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(req: Request) {
  const body = await req.json();

  try {
    await prisma.user.update({
      where: { email: body.currUserEmail },
      data: {
        friends: { disconnect: { id: body.friendId } },
        friendOf: { disconnect: { id: body.friendId } },
      },
    });
    await prisma.user.update({
      where: { id: body.friendId },
      data: {
        friends: { disconnect: { email: body.currUserEmail } },
        friendOf: { disconnect: { email: body.currUserEmail } },
      },
    });
    return new NextResponse(
      JSON.stringify({ message: "Friend deleted successfully" }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

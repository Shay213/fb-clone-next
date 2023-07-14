import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        conversations: {
          include: { messages: true, usersPair: true },
        },
      },
    });

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    return new NextResponse(JSON.stringify(user.conversations), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

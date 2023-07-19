import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { conversationId: string } }
) {
  const { conversationId } = params;
  try {
    const conversation = await prisma.conversation.findUnique({
      where: { conversationId },
      include: {
        messages: { orderBy: { createdAt: "desc" } },
        usersPair: true,
      },
    });
    return new NextResponse(JSON.stringify(conversation), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

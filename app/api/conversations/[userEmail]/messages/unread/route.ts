import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { userEmail: string } }
) {
  const { userEmail } = params;

  try {
    const conversations = await prisma.conversation.findMany({
      where: { user: { email: userEmail } },
      select: {
        messages: {
          where: {
            AND: [
              { sendedBy: { email: { not: { contains: userEmail } } } },
              { read: { equals: false } },
            ],
          },
        },
      },
    });

    const count = conversations.reduce(
      (sum, el) => sum + el.messages.length,
      0
    );

    return new NextResponse(JSON.stringify({ unreadCount: count }), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

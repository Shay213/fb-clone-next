import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { userId: string; friendId: string } }
) {
  const { userId, friendId } = params;

  try {
    const conversation = await prisma.conversation.findUnique({
      where: { conversationID: userId + friendId },
      select: {
        id: true,
        messages: {
          select: {
            id: true,
            description: true,
            createdAt: true,
            sendedBy: {
              select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });
    return NextResponse.json(conversation);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

export async function POST(
  req: Request,
  { params }: { params: { userId: string; friendId: string } }
) {
  const { friendId, userId } = params;

  try {
    const conversationUser = await prisma.conversation.create({
      data: {
        conversationID: userId + friendId,
        user: { connect: { id: userId } },
      },
      select: {
        id: true,
        messages: {
          select: {
            id: true,
            description: true,
            createdAt: true,
            sendedBy: {
              select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });
    await prisma.conversation.create({
      data: {
        conversationID: friendId + userId,
        user: { connect: { id: friendId } },
      },
    });
    return NextResponse.json(conversationUser);
  } catch (error) {
    return NextResponse.error();
  }
}

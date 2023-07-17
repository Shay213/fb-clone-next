import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";
import { ExtendedConversation } from "@/app/actions/getConversations";

export async function PATCH(req: Request) {
  try {
    const { userId, friendId } = await req.json();

    const conversationId = [userId, friendId].sort().join();

    const conversation = await prisma.conversation.findUnique({
      where: { conversationId },
      include: { messages: true, usersPair: true },
    });

    if (conversation) {
      pusherServer.trigger(
        `conversations-${userId}`,
        "newFriendAdded",
        conversation
      );
      pusherServer.trigger(
        `conversations-${friendId}`,
        "newFriendAdded",
        conversation
      );
    } else {
      const conversation = await prisma.conversation.create({
        data: {
          conversationId,
          usersPair: { connect: { id: userId } },
        },
      });
      const updatedConversation = await prisma.conversation.update({
        where: { id: conversation.id },
        data: { usersPair: { connect: { id: friendId } } },
        include: { messages: true, usersPair: true },
      });
      pusherServer.trigger(
        `conversations-${userId}`,
        "newFriendAdded",
        updatedConversation
      );
      pusherServer.trigger(
        `conversations-${friendId}`,
        "newFriendAdded",
        updatedConversation
      );
    }

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
    const userPosts = await prisma.post.findMany({
      where: {
        OR: [
          { author: { id: { equals: userId } } },
          { audience: { equals: "PUBLIC" } },
          {
            AND: [
              { audience: { equals: "FRIENDS" } },
              { author: { friendsIDs: { hasSome: userId } } },
            ],
          },
        ],
      },
      include: {
        author: {
          select: {
            id: true,
            picture: true,
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    const friendPosts = await prisma.post.findMany({
      where: {
        OR: [
          { author: { id: { equals: friendId } } },
          { audience: { equals: "PUBLIC" } },
          {
            AND: [
              { audience: { equals: "FRIENDS" } },
              { author: { friendsIDs: { hasSome: friendId } } },
            ],
          },
        ],
      },
      include: {
        author: {
          select: {
            id: true,
            picture: true,
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    pusherServer.trigger(
      `feed-${userId}`,
      "update-feed-added-friend",
      userPosts
    );
    pusherServer.trigger(
      `feed-${friendId}`,
      "update-feed-added-friend",
      friendPosts
    );

    return new NextResponse("Sended friend request successfully", {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}

import React from "react";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getFriends from "@/app/actions/friends/getFriends";
import getUserId from "@/app/actions/user/getUserId";
import getConversation from "@/app/actions/conversation/getConversation";
import moment from "moment";
import ChatWrapper from "./ChatWrapper";

const Chats = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }

  const friendsData = getFriends(session.user.email);
  const userIdData = getUserId(session.user.email);

  const [friends, userId] = await Promise.all([friendsData, userIdData]);

  const friendsChats = friends.map((f) => ({
    ...f,
    conversation: getConversation(userId, f.id),
  }));

  return (
    <div className="flex flex-col gap-3">
      {friendsChats.map(async (item) => {
        const conversation = await item.conversation;
        const lastMessage =
          conversation.messages[conversation.messages.length - 1];
        if (!lastMessage) {
          return (
            <ChatWrapper
              key={conversation.id}
              userId={userId}
              friendId={item.id}
            >
              <div className="flex items-center gap-2">
                <Image
                  src={"/avatar.jpeg"}
                  alt="chat-image"
                  width={45}
                  height={45}
                  className="object-cover rounded-full"
                />
                <h4 className="text-sm font-semibold dark:text-zinc-200">
                  {`${item.firstName} ${item.lastName}`}
                </h4>
              </div>
            </ChatWrapper>
          );
        }
        const isLastMessageUsers =
          lastMessage.sendedBy.email === session.user?.email;
        return (
          <ChatWrapper key={conversation.id} userId={userId} friendId={item.id}>
            <div className="flex-1 flex items-center gap-2">
              <Image
                src={"/avatar.jpeg"}
                alt="chat-image"
                width={45}
                height={45}
                className="object-cover rounded-full"
              />
              <div className="flex-1 flex flex-col">
                <h4 className="text-sm font-semibold dark:text-zinc-200">
                  {`${item.firstName} ${item.lastName}`}
                </h4>
                <div className="flex gap-2">
                  <span
                    className={`text-xs dark:text-zinc-300 ${
                      !isLastMessageUsers && !lastMessage.read
                        ? "font-bold"
                        : ""
                    }`}
                  >
                    {`${
                      isLastMessageUsers
                        ? "You"
                        : lastMessage.sendedBy.firstName
                    }: ${
                      lastMessage.description.length > 30
                        ? lastMessage.description.slice(0, 30) + "..."
                        : lastMessage.description
                    }`}
                  </span>
                  <span className="text-xs dark:text-zinc-300">
                    {moment(lastMessage.createdAt).fromNow()}
                  </span>
                </div>
              </div>
            </div>
            {!isLastMessageUsers && !lastMessage.read && (
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            )}
          </ChatWrapper>
        );
      })}
    </div>
  );
};

export default Chats;

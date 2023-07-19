import React, { useEffect, useState } from "react";
import Image from "next/image";
import moment from "moment";
import { ExtendedConversation } from "@/app/actions/getConversations";
import { useModalsContext } from "@/app/providers/ModalsProvider";
import { pusherClient } from "@/lib/pusher";
import { Message } from "@prisma/client";
import { useConversationIdContext } from "@/app/providers/ConversationIdProvider";

interface ChatsProps {
  initConversations: ExtendedConversation[];
  userId: string;
}

const Chats = ({ initConversations, userId }: ChatsProps) => {
  const [conversations, setConversations] = useState(initConversations);
  const conversationIdContext = useConversationIdContext();
  const modalsContext = useModalsContext();

  useEffect(() => {
    const handler = ({
      m,
      conversationId,
    }: {
      m: Message;
      conversationId: string;
    }) => {
      setConversations((prev) =>
        prev.map((conversation) => {
          if (conversation.conversationId === conversationId) {
            return { ...conversation, messages: [m, ...conversation.messages] };
          }
          return conversation;
        })
      );
    };

    pusherClient.subscribe(`chats-${userId}`);
    pusherClient.bind("new-message", handler);

    return () => {
      pusherClient.unsubscribe(`chats-${userId}`);
      pusherClient.unbind("new-message", handler);
    };
  }, [userId]);

  const handleClick = (c: ExtendedConversation) => {
    if (conversationIdContext?.conversationId === c.conversationId) {
      conversationIdContext?.setConversationId(null);
      conversationIdContext?.setFriendName(null);
      modalsContext?.conversation.hide();
    } else {
      const friend = c.usersPair.find((user) => user.id !== userId);

      conversationIdContext?.setConversationId(c.conversationId);
      conversationIdContext?.setFriendName(
        `${friend?.firstName} ${friend?.lastName}`
      );
      modalsContext?.conversation.show();
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {conversations.map((item) => {
        const friend = item.usersPair.find((user) => user.id !== userId);
        const lastMessage = item.messages[0];
        const isLastMessageUsers = lastMessage?.sendedByID === userId;
        return (
          <div
            key={item.conversationId}
            className="
                flex items-center justify-between rounded-md hover:bg-gray-200 
                transition cursor-pointer p-1
              "
            onClick={() => handleClick(item)}
          >
            <div className="flex-1 flex items-center gap-2">
              <Image
                src={friend?.picture || "/avatar.jpeg"}
                alt="chat-image"
                width={45}
                height={45}
                className="object-cover rounded-full"
              />
              <div className="flex-1 flex flex-col">
                <h4 className="text-sm font-semibold dark:text-zinc-200">
                  {`${friend?.firstName} ${friend?.lastName}`}
                </h4>
                {lastMessage && (
                  <div className="flex gap-2">
                    <span
                      className={`text-xs dark:text-zinc-300 ${
                        !isLastMessageUsers && !lastMessage?.read
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      {`${isLastMessageUsers ? "You:" : ""} ${
                        lastMessage?.description?.length > 30
                          ? lastMessage?.description.slice(0, 30) + "..."
                          : lastMessage?.description
                      }`}
                    </span>
                    <span className="text-xs dark:text-zinc-300">
                      {moment(lastMessage?.createdAt).fromNow() || ""}
                    </span>
                  </div>
                )}
              </div>
            </div>
            {lastMessage && !isLastMessageUsers && !lastMessage?.read && (
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Chats;

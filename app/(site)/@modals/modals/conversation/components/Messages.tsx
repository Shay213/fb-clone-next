import React, { useEffect, useState } from "react";
import Message from "./Message";
import { Message as IMessage } from "@prisma/client";
import { User } from "@prisma/client";
import { pusherClient } from "@/lib/pusher";
interface MessagesProps {
  initMessages: IMessage[];
  userId?: string;
  friend?: User;
  isLoading: boolean;
  isError: boolean;
}

const Messages = ({
  initMessages,
  userId,
  friend,
  isError,
  isLoading,
}: MessagesProps) => {
  const [messages, setMessages] = useState<IMessage[]>(initMessages);

  useEffect(() => {
    const handler = (m: IMessage) => {
      const conversationId = [userId, friend?.id].sort().join();
      if (m.conversationID === conversationId) {
        setMessages((prev) => [m, ...prev]);
      }
    };

    pusherClient.subscribe(`messages-${userId}`);
    pusherClient.bind("new-message", handler);

    return () => {
      pusherClient.subscribe(`messages-${userId}`);
      pusherClient.unbind("new-message", handler);
    };
  }, [userId, friend?.id]);

  return (
    <div
      className="
        max-h-80 h-80 px-2 overflow-y-scroll scrollbar-thin
        scrollbar-thumb-gray-300 scrollbar-track-slate-100
        dark:scrollbar-thumb-zinc-500 dark:scrollbar-track-zinc-300
      "
    >
      <div className="flex gap-1 h-full w-full flex-col-reverse">
        {isLoading
          ? "Loading..."
          : isError
          ? "Something went wrong"
          : messages?.map((m) => (
              <Message key={m.id} message={m} userId={userId} friend={friend} />
            ))}
      </div>
    </div>
  );
};

export default Messages;

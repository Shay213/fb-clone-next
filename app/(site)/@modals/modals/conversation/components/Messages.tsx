import React, { useEffect, useState } from "react";
import Message from "./Message";
import { Message as IMessage } from "@prisma/client";
import { User } from "@prisma/client";
import { pusherClient } from "@/lib/pusher";
interface MessagesProps {
  initMessages: IMessage[];
  userId?: string;
  friend?: User;
}

const Messages = ({ initMessages, userId, friend }: MessagesProps) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages(initMessages);
  }, [initMessages]);

  useEffect(() => {
    const handler = (m: IMessage) => {
      setMessages((prev) => [m, ...prev]);
    };
    const conversationId = [userId, friend?.id].sort().join();
    pusherClient.subscribe(`messages-${conversationId}`);
    pusherClient.bind("new-message", handler);

    return () => {
      pusherClient.unsubscribe(`messages-${conversationId}`);
      pusherClient.unbind("new-message", handler);
    };
  }, [userId, friend?.id]);

  return (
    <div
      className="
        flex-1 px-2 overflow-y-auto scrollbar-thin
        scrollbar-thumb-gray-300 scrollbar-track-slate-100
        dark:scrollbar-thumb-zinc-500 dark:scrollbar-track-zinc-300
      "
    >
      <div className="flex gap-1 h-full w-full flex-col-reverse">
        {messages?.map((m) => (
          <Message key={m.id} message={m} userId={userId} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Messages;

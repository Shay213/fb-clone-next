import React from "react";
import Message from "./Message";
import getConversation from "@/app/actions/conversation/getConversation";

const Messages = async ({
  friendId,
  userId,
}: {
  friendId: string;
  userId: string;
}) => {
  const conversation = await getConversation(userId, friendId);

  return (
    <div
      className="
        flex-1 px-2 overflow-y-auto scrollbar-thin 
        scrollbar-thumb-gray-300 scrollbar-track-slate-100
        dark:scrollbar-thumb-zinc-500 dark:scrollbar-track-zinc-300
      "
    >
      <div className="flex flex-col gap-1 justify-end h-full w-full">
        {conversation.messages.map((m) => (
          <Message key={m.id} message={m} />
        ))}
      </div>
    </div>
  );
};

export default Messages;

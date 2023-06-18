"use client";

import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";
import React from "react";

const ChatWrapper = ({
  children,
  userId,
  friendId,
}: {
  children: React.ReactNode;
  userId: string;
  friendId: string;
}) => {
  const homeModalsContext = useHomeModalsContext();
  return (
    <div
      className="
        flex items-center gap-2 hover:bg-gray-200 
        cursor-pointer p-2 rounded-md dark:hover:bg-zinc-700
      "
      onClick={() => {
        homeModalsContext?.messenger.hide();
        homeModalsContext?.toggleConversationModal(userId, friendId);
      }}
    >
      {children}
    </div>
  );
};

export default ChatWrapper;

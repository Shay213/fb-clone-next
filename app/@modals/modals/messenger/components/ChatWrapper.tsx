"use client";

import { useModalsContext } from "@/app/providers/ModalsProvider";
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
  const modalsContext = useModalsContext();
  return (
    <div
      className="
        flex items-center gap-2 hover:bg-gray-200 
        cursor-pointer p-2 rounded-md dark:hover:bg-zinc-700
      "
      onClick={() => {
        modalsContext?.messenger.hide();
      }}
    >
      {children}
    </div>
  );
};

export default ChatWrapper;

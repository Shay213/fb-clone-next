import React from "react";

interface MessageProps {
  children: React.ReactNode;
  userId: string;
  friendId: string;
}

const MessagesWrapper = ({ children, friendId, userId }: MessageProps) => {
  return (
    <div
      className="
        flex-1 px-2 overflow-y-auto scrollbar-thin
        scrollbar-thumb-gray-300 scrollbar-track-slate-100
        dark:scrollbar-thumb-zinc-500 dark:scrollbar-track-zinc-300
      "
      id={`messages${userId}${friendId}`}
    >
      <div className="flex flex-col gap-1 h-full w-full">{children}</div>
    </div>
  );
};

export default MessagesWrapper;

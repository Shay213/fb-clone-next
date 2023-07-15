import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div
      className="
        flex-1 px-2 overflow-y-auto scrollbar-thin
        scrollbar-thumb-gray-300 scrollbar-track-slate-100
        dark:scrollbar-thumb-zinc-500 dark:scrollbar-track-zinc-300
      "
    >
      <div className="flex flex-col gap-1 h-full w-full">
        {[].map((m) => (
          <Message key={""} message={m} />
        ))}
      </div>
    </div>
  );
};

export default Messages;

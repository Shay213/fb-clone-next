"use client";

import React from "react";
import Heading from "./Heading";
import Categories from "./Categories";
import Chats from "./Chats";
import Footer from "./Footer";
import { useModalsContext } from "@/app/providers/ModalsProvider";
import Search from "./Search";
import { ExtendedConversation } from "@/app/actions/getConversations";

interface MessengerPanelProps {
  initConversations: ExtendedConversation[];
  userId: string;
}

const MessengerPanel = ({ initConversations, userId }: MessengerPanelProps) => {
  const modalsContext = useModalsContext();
  return (
    <div
      className={`
        fixed top-[68px] right-0 z-50 max-h-[calc(100vh-160px)] overflow-auto
        flex flex-col dark:dark:bg-zinc-800
        bg-slate-50 rounded-md shadow-sm border-[1px] dark:border-none
        border-gray-200
        ${
          modalsContext?.messenger.isOpen
            ? "animate-slideInRightToLeft"
            : "translate-x-full"
        }
      `}
    >
      <div
        className={`
            flex flex-col gap-3 flex-1 py-4 px-5 overflow-auto w-[420px]
            scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-100
            dark:scrollbar-thumb-zinc-500 dark:scrollbar-track-zinc-300
          `}
      >
        <Heading />
        <Search />
        <Categories />
        <Chats initConversations={initConversations} userId={userId} />
      </div>
      <Footer />
    </div>
  );
};

export default MessengerPanel;

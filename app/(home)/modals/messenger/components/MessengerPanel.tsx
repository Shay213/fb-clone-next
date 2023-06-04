import React from "react";
import Heading from "./Heading";
import Search from "./Search";
import Categories from "./Categories";
import Chats from "./Chats";
import Footer from "./Footer";

const MessengerPanel = () => {
  return (
    <div
      className="
        max-h-full flex flex-col dark:dark:bg-zinc-800
        bg-slate-50 rounded-md shadow-sm border-[1px] dark:border-none
        border-gray-200 animate-slideInRightToLeft
      "
    >
      <div
        className={`
            flex flex-col gap-3 flex-1 py-4 px-5 overflow-auto
            scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-100
            dark:scrollbar-thumb-zinc-500 dark:scrollbar-track-zinc-300
          `}
      >
        <Heading />
        <Search />
        <Categories />
        <Chats />
      </div>
      <Footer />
    </div>
  );
};

export default MessengerPanel;

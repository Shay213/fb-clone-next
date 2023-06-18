import React from "react";
import Heading from "./Heading";
import Categories from "./Categories";
import Chats from "./Chats";
import Footer from "./Footer";
import SearchWrapper from "./SearchWrapper";

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
            flex flex-col gap-3 flex-1 py-4 px-5 overflow-auto w-[420px]
            scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-100
            dark:scrollbar-thumb-zinc-500 dark:scrollbar-track-zinc-300
          `}
      >
        <Heading />
        <SearchWrapper>
          <Categories />
          {/* @ts-ignore */}
          <Chats />
        </SearchWrapper>
      </div>
      <Footer />
    </div>
  );
};

export default MessengerPanel;

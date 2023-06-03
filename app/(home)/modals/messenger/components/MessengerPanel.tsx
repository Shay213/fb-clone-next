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
        max-h-full flex flex-col
        bg-white rounded-md shadow-sm border-[1px]
        border-gray-200 animate-slideInRightToLeft
      "
    >
      <div
        className={`flex flex-col gap-3 flex-1 py-4 px-5 overflow-auto scrollbar`}
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

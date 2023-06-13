import React from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import IsActiveContextProvider from "./isActiveContextProvider";

const ConversationPanel = () => {
  return (
    <div
      className="
        h-full w-full right-10 bg-white z-[100] rounded-md shadow-lg 
        animate-slideInBottomToTop flex flex-col conversation
      "
    >
      <IsActiveContextProvider>
        <Header />
        <div className="flex-1 p-2">test</div>
        <Bottom />
      </IsActiveContextProvider>
    </div>
  );
};

export default ConversationPanel;

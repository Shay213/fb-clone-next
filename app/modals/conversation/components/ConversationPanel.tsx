import React from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import IsActiveContextProvider from "./isActiveContextProvider";

const ConversationPanel = () => {
  return (
    <div
      className="
        fixed h-96 w-72 bottom-0 right-10 bg-white z-[100]
        rounded-md shadow-lg flex flex-col
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

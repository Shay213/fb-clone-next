import React from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import Messages from "./Messages";

const ConversationPanel = () => {
  return (
    <>
      <div
        className="
            h-full w-full bg-white rounded-md shadow-lg 
            animate-slideInBottomToTop flex-col hidden group
          "
      >
        <Header name="test" />
        <Messages />
        <Bottom />
      </div>
    </>
  );
};

export default ConversationPanel;

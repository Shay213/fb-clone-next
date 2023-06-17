import React from "react";
import ConversationPanel from "./components/ConversationPanel";

const ConversationModal = () => {
  return (
    <div
      className="
          fixed h-96 w-72 bottom-0 right-10 bg-transparent px-2 pt-2 z-0 
          overflow-hidden 
        "
      id="conversationModalWrapper"
    >
      {/* @ts-ignore */}
      <ConversationPanel />
    </div>
  );
};

export default ConversationModal;

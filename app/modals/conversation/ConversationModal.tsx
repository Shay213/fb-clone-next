import React from "react";
import ConversationContextContainer from "./components/ConversationContextContainer";
import ConversationPanel from "./components/ConversationPanel";

const ConversationModal = () => {
  return (
    <ConversationContextContainer>
      <div
        className="
          fixed h-96 w-72 bottom-0 right-10 bg-transparent px-2 pt-2 z-[100] 
          overflow-hidden 
        "
      >
        <ConversationPanel />
      </div>
    </ConversationContextContainer>
  );
};

export default ConversationModal;

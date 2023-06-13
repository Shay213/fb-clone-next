import React from "react";
import ConversationContextContainer from "./components/ConversationContextContainer";
import ConversationPanel from "./components/ConversationPanel";

const ConversationModal = () => {
  return (
    <ConversationContextContainer>
      <ConversationPanel />
    </ConversationContextContainer>
  );
};

export default ConversationModal;

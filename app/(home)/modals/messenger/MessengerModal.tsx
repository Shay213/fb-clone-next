import React from "react";
import ContextContainer from "./components/ContextContainer";
import MessengerPanel from "./components/MessengerPanel";

const MessengerModal = () => {
  return (
    <ContextContainer>
      <div
        className="
      absolute top-0 right-0 bg-transparent p-2 z-50 
      max-h-[calc(100vh-160px)] h-[calc(100vh-160px)]
      overflow-hidden
    "
      >
        <MessengerPanel />
      </div>
    </ContextContainer>
  );
};

export default MessengerModal;

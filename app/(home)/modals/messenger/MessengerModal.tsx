import React from "react";
import MessengerContextContainer from "./components/MessengerContextContainer";
import MessengerPanel from "./components/MessengerPanel";

const MessengerModal = () => {
  return (
    <MessengerContextContainer>
      <div
        className="
          fixed top-[62px] right-0 bg-transparent p-2 z-50 
          max-h-[calc(100vh-160px)] h-[calc(100vh-160px)]
          overflow-hidden
        "
      >
        <MessengerPanel />
      </div>
    </MessengerContextContainer>
  );
};

export default MessengerModal;

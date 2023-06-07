import React from "react";
import NotiContextContainer from "./components/NotiContextContainer";
import NotiPanel from "./components/NotiPanel";

const NotiModal = () => {
  return (
    <NotiContextContainer>
      <div
        className="
          absolute top-0 right-0 bg-transparent p-2 z-50 
          max-h-[calc(100vh-160px)] h-[calc(100vh-160px)]
          overflow-hidden
        "
      >
        {/* @ts-ignore */}
        <NotiPanel />
      </div>
    </NotiContextContainer>
  );
};

export default NotiModal;

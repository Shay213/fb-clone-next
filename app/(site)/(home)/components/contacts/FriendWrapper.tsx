"use client";

import { useModalsContext } from "@/app/providers/ModalsProvider";
import React from "react";

const FriendWrapper = ({ children }: { children: React.ReactNode }) => {
  const modalsContext = useModalsContext();

  return (
    <div
      onClick={() => {
        modalsContext?.conversation.show();
      }}
    >
      {children}
    </div>
  );
};

export default FriendWrapper;

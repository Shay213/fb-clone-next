"use client";

import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";
import React, { useCallback } from "react";

const FriendWrapper = ({ children }: { children: React.ReactNode }) => {
  const homeModalsContext = useHomeModalsContext();

  const handleClick = useCallback(() => {
    homeModalsContext?.conversation.toggle();
  }, [homeModalsContext?.conversation]);

  return <div onClick={handleClick}>{children}</div>;
};

export default FriendWrapper;

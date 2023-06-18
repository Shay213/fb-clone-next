"use client";

import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";
import React, { MouseEventHandler, useCallback } from "react";

const FriendWrapper = ({
  children,
  userId,
  friendId,
}: {
  children: React.ReactNode;
  userId: string;
  friendId: string;
}) => {
  const homeModalsContext = useHomeModalsContext();
  const handleClick = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      homeModalsContext?.toggleConversationModal(userId, friendId);
    },
    [userId, friendId, homeModalsContext]
  );
  return <div onClick={handleClick}>{children}</div>;
};

export default FriendWrapper;

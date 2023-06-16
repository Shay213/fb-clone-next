"use client";

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
  const handleClick = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      const modalId = userId + friendId;
      const modal = document.getElementById(modalId);
      const visibleModal = document.querySelector(".visibleConversation");

      if (visibleModal === modal) {
        visibleModal?.classList.remove("visibleConversation");
      } else if (visibleModal !== modal) {
        visibleModal?.classList.remove("visibleConversation");
        modal?.classList.add("visibleConversation");
      } else {
        modal?.classList.add("visibleConversation");
      }
    },
    [userId, friendId]
  );
  return <div onClick={handleClick}>{children}</div>;
};

export default FriendWrapper;

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
      const conversationModalWrapper = document.getElementById(
        "conversationModalWrapper"
      );
      const visibleModal = document.querySelector(".visibleConversation");
      const visibleMessagesWrapper = document.getElementById(
        `messages${userId}${friendId}`
      );

      if (visibleModal === modal) {
        visibleModal?.classList.remove("visibleConversation");
        if (conversationModalWrapper)
          conversationModalWrapper.style.zIndex = "0";
      } else if (visibleModal !== modal) {
        visibleModal?.classList.remove("visibleConversation");
        modal?.classList.add("visibleConversation");
        if (conversationModalWrapper)
          conversationModalWrapper.style.zIndex = "100";
        if (visibleMessagesWrapper)
          visibleMessagesWrapper.scrollTop =
            visibleMessagesWrapper.scrollHeight;
      } else {
        modal?.classList.add("visibleConversation");
        if (conversationModalWrapper)
          conversationModalWrapper.style.zIndex = "100";
        if (visibleMessagesWrapper)
          visibleMessagesWrapper.scrollTop =
            visibleMessagesWrapper.scrollHeight;
      }
    },
    [userId, friendId]
  );
  return <div onClick={handleClick}>{children}</div>;
};

export default FriendWrapper;

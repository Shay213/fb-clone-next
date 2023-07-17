"use client";

import React, { useEffect, useState } from "react";
import Friend from "./Friend";
import { ExtendedConversation } from "@/app/actions/getConversations";
import { useModalsContext } from "@/app/providers/ModalsProvider";
import { pusherClient } from "@/lib/pusher";

interface FriendsProps {
  initConversations: ExtendedConversation[];
  userId: string;
}

const Friends = ({ initConversations, userId }: FriendsProps) => {
  const [conversations, setConversations] = useState(initConversations);
  const modalsContext = useModalsContext();

  useEffect(() => {
    const handler = (c: ExtendedConversation) => {
      setConversations((prev) => [...prev, c]);
    };

    pusherClient.subscribe(`conversations-${userId}`);
    pusherClient.bind("newFriendAdded", handler);

    return () => {
      pusherClient.unsubscribe(`conversations-${userId}`);
      pusherClient.unbind("newFriendAdded", handler);
    };
  }, [userId]);

  const handleClick = (c: ExtendedConversation) => {
    if (
      modalsContext?.conversation.currentConversation?.conversationId ===
      c.conversationId
    ) {
      modalsContext?.conversation.hide();
      modalsContext.conversation?.setConversation?.(null);
      modalsContext.conversation.currentConversation = null;
    } else {
      modalsContext?.conversation.show();
      modalsContext?.conversation?.setConversation?.(c);
    }
  };

  return (
    <div>
      {conversations.map((c) => {
        const friend = c.usersPair.find((user) => user.id !== userId);
        if (!friend) return null;
        return (
          <Friend
            key={c.conversationId}
            user={friend}
            handleClick={() => handleClick(c)}
          />
        );
      })}
    </div>
  );
};

export default Friends;

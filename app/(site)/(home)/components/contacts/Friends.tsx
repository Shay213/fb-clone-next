"use client";

import React, { useEffect, useState } from "react";
import Friend from "./Friend";
import { ExtendedConversation } from "@/app/actions/getConversations";
import { useModalsContext } from "@/app/providers/ModalsProvider";
import { pusherClient } from "@/lib/pusher";
import { useConversationIdContext } from "@/app/providers/ConversationIdProvider";

interface FriendsProps {
  initConversations: ExtendedConversation[];
  userId: string;
}

const Friends = ({ initConversations, userId }: FriendsProps) => {
  const [conversations, setConversations] = useState(initConversations);
  const modalsContext = useModalsContext();
  const conversationIdContext = useConversationIdContext();

  useEffect(() => {
    const friendAdded = (c: ExtendedConversation) => {
      setConversations((prev) => [...prev, c]);
    };
    const friendRemoved = (conversationId: string) => {
      setConversations((prev) =>
        prev.filter((c) => c.conversationId !== conversationId)
      );
    };

    pusherClient.subscribe(`conversations-${userId}`);
    pusherClient.bind("newFriendAdded", friendAdded);
    pusherClient.bind("friendRemoved", friendRemoved);

    return () => {
      pusherClient.unsubscribe(`conversations-${userId}`);
      pusherClient.unbind("newFriendAdded", friendAdded);
      pusherClient.unbind("friendRemoved", friendRemoved);
    };
  }, [userId]);

  const handleClick = (c: ExtendedConversation) => {
    if (conversationIdContext?.conversationId === c.conversationId) {
      conversationIdContext?.setConversationId(null);
      conversationIdContext?.setFriendName(null);
      modalsContext?.conversation.hide();
    } else {
      const friend = c.usersPair.find((user) => user.id !== userId);

      conversationIdContext?.setConversationId(c.conversationId);
      conversationIdContext?.setFriendName(
        `${friend?.firstName} ${friend?.lastName}`
      );
      modalsContext?.conversation.show();
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

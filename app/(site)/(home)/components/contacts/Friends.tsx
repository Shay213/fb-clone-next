"use client";

import React, { useState } from "react";
import Friend from "./Friend";
import { ExtendedConversation } from "@/app/actions/getConversations";
import { useModalsContext } from "@/app/providers/ModalsProvider";

interface FriendsProps {
  initConversations: ExtendedConversation[];
  userId: string;
}

const Friends = ({ initConversations, userId }: FriendsProps) => {
  const [conversations, setConversations] = useState(initConversations);
  const modalsContext = useModalsContext();

  const handleClick = (c: ExtendedConversation) => {
    modalsContext?.conversation.toggle();
    modalsContext?.conversation.setConversation(c);
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

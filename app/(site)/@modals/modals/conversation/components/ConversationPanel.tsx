"use client";

import React, { useState } from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import Messages from "./Messages";
import { useModalsContext } from "@/app/providers/ModalsProvider";
import { useSession } from "next-auth/react";
import { ExtendedConversation } from "@/app/actions/getConversations";
import { useQuery } from "@tanstack/react-query";
import getConversation from "@/app/actions/getConvertsation";
import { useConversationIdContext } from "@/app/providers/ConversationIdProvider";

const ConversationPanel = () => {
  const { data: session } = useSession();
  const conversationIdContext = useConversationIdContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: [
      "conversation",
      conversationIdContext?.conversationId,
      session?.user.id,
    ],
    queryFn: () => getConversation(conversationIdContext?.conversationId),
  });
  const friend = data?.usersPair.find((user) => user.id !== session?.user.id);
  const messages = data?.messages || [];

  return (
    <>
      <div
        className={`
            fixed w-72 bottom-0 right-10 z-[60] 
            bg-white rounded-md shadow-lg flex flex-col group
            animate-slideInBottomToTop
          `}
      >
        <Header name={conversationIdContext?.friendName || ""} />
        <Messages
          initMessages={messages}
          userId={session?.user.id}
          friend={friend}
          key={data?.id}
          isLoading={isLoading}
          isError={isError}
        />
        <Bottom userId={session?.user.id} friendId={friend?.id} />
      </div>
    </>
  );
};

export default ConversationPanel;

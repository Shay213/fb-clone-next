"use client";

import React from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import Messages from "./Messages";
import { useModalsContext } from "@/app/providers/ModalsProvider";
import { useSession } from "next-auth/react";

const ConversationPanel = () => {
  const { data: session } = useSession();
  const modalsContext = useModalsContext();
  const conversation = modalsContext?.conversation.getConversation();

  if (!conversation) return null;

  const friend = conversation?.usersPair.find(
    (user) => user.id !== session?.user.id
  );
  const messages = conversation?.messages || [];
  return (
    <>
      <div
        className={`
            fixed h-96 w-72 bottom-0 right-10 z-[60] 
            bg-white rounded-md shadow-lg flex flex-col group
            ${
              modalsContext?.conversation.isOpen
                ? "animate-slideInBottomToTop"
                : "translate-y-full"
            }
          `}
      >
        <Header name={`${friend?.firstName} ${friend?.lastName}`} />
        <Messages
          initMessages={messages}
          userId={session?.user.id}
          friend={friend}
        />
        <Bottom userId={session?.user.id} friendId={friend?.id} />
      </div>
    </>
  );
};

export default ConversationPanel;

"use client";

import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";
import React from "react";

const ConversationContextContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const homeModalsContext = useHomeModalsContext();

  if (!homeModalsContext?.conversation) {
    return null;
  }

  return <>{homeModalsContext.conversation.isOpen && children}</>;
};

export default ConversationContextContainer;

"use client";

import React from "react";
import ConversationPanel from "./components/ConversationPanel";
import { useModalsContext } from "@/app/providers/ModalsProvider";

const ConversationModal = () => {
  const modalsContext = useModalsContext();
  return modalsContext?.conversation.isOpen && <ConversationPanel />;
};

export default ConversationModal;

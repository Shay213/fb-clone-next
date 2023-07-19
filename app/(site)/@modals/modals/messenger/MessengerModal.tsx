import React from "react";
import MessengerPanel from "./components/MessengerPanel";
import getConversations from "@/app/actions/getConversations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const MessengerModal = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  const conversations = await getConversations(session.user.id);

  return (
    <MessengerPanel
      initConversations={conversations}
      userId={session.user.id}
    />
  );
};

export default MessengerModal;

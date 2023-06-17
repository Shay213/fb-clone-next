import React from "react";
import Message from "./Message";
import getConversation from "@/app/actions/conversation/getConversation";
import MessagesWrapper from "./MessagesWrapper";

const Messages = async ({
  friendId,
  userId,
}: {
  friendId: string;
  userId: string;
}) => {
  const conversation = await getConversation(userId, friendId);

  return (
    <MessagesWrapper userId={userId} friendId={friendId}>
      {conversation.messages.map((m) => (
        <Message key={m.id} message={m} />
      ))}
    </MessagesWrapper>
  );
};

export default Messages;

import { Conversation, Message, User } from "@prisma/client";

export type ExtendedConversation = Conversation & { messages: Message[] } & {
  usersPair: User[];
};

export default async function getConversations(
  userId: string
): Promise<ExtendedConversation[]> {
  const res = await fetch(`http://localhost:3000/api/conversations/${userId}`);

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return res.json();
}

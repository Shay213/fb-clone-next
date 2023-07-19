import { ExtendedConversation } from "./getConversations";

export default async function getConversation(
  conversationId: string | null | undefined
): Promise<ExtendedConversation> {
  const res = await fetch(
    `http://localhost:3000/api/conversation/${conversationId}`
  );

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return res.json();
}

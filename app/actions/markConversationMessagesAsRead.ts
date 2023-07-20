export default async function markConversationMessagesAsRead(
  conversationId?: string | null,
  userId?: string | null
) {
  const res = await fetch(
    `http://localhost:3000/api/messages/${conversationId}/${userId}`,
    { method: "PATCH" }
  );

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return null;
}

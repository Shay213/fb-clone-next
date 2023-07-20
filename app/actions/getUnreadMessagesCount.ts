export default async function getUnreadMessagesCount(
  userId: string
): Promise<number> {
  const res = await fetch(
    `http://localhost:3000/api/conversations/${userId}/unreadMessagesCount`
  );

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return res.json();
}

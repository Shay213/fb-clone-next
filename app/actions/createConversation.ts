export default async function createConversation(
  userId: string,
  friendId: string
) {
  const res = await fetch("http://localhost:3000/api/conversation", {
    method: "POST",
    body: JSON.stringify({ userId, friendId }),
  });

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }
}

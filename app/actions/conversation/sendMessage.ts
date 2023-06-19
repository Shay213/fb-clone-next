export default async function sendMessage(
  description: string,
  userId: string,
  friendId: string
) {
  const body = { description, userId, friendId };
  const res = await fetch(`http://localhost:3000/api/conversation/message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
}

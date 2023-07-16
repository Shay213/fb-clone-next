export default async function sendMessage(
  senderId: string,
  receiverId: string,
  description: string
) {
  const res = await fetch("http://localhost:3000/api/message", {
    method: "POST",
    body: JSON.stringify({ senderId, receiverId, description }),
  });

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }
}

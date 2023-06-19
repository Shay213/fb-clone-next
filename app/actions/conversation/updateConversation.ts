export default async function updateConversation(
  userId: string,
  friendId: string
) {
  const res = await fetch(
    `http://localhost:3000/api/conversation/${userId}/${friendId}`,
    {
      method: "PATCH",
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

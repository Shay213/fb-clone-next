export default async function updateConversation(
  userId: string,
  friendId: string
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/conversation/${userId}/${friendId}`,
    {
      method: "PATCH",
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

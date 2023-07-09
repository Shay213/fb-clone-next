export default async function alreadyFriends(
  userId: string,
  friendId: string
): Promise<{ alreadyFriends: boolean }> {
  const res = await fetch(
    `http://localhost:3000/api/friends/${userId}/${friendId}`
  );

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return res.json();
}

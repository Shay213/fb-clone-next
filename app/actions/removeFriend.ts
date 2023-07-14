export default async function removeFriend(userId: string, friendId: string) {
  const res = await fetch("http://localhost:3000/api/friend/remove", {
    method: "PATCH",
    body: JSON.stringify({ userId, friendId }),
  });

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }
}

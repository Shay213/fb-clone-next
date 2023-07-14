export default async function addFriend(userId: string, friendId: string) {
  const res = await fetch("http://localhost:3000/api/friend/add", {
    method: "PATCH",
    body: JSON.stringify({ userId, friendId }),
  });

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }
}

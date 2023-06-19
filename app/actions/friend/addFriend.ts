export default async function addFriend(currUserId: string, friendId: string) {
  const res = await fetch(`http://localhost:3000/api/friend/add`, {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ currUserId, friendId }),
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
}

export default async function addFriend(currUserId: string, friendId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/friend/add`, {
    body: JSON.stringify({ currUserId, friendId }),
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
}

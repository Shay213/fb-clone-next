export default async function removeFriend(email: string, friendId: string) {
  const res = await fetch(`http://localhost:3000/api/friend/remove`, {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ currUserEmail: email, friendId }),
    method: "PATCH",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

export default async function removeFriend(email: string, friendId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/friend/remove`, {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ currUserEmail: email, friendId }),
    method: "PATCH",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

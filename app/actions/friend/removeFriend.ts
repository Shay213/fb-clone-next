export default async function removeFriend(email: string, friendId: string) {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/friend/remove`, {
    body: JSON.stringify({ email, friendId }),
    method: "POST",
  });
}

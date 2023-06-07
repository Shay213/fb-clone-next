export default async function addFriend(email: string, friendId: string) {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/friend/add`, {
    body: JSON.stringify({ email, friendId }),
    method: "POST",
  });
}

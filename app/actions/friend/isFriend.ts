export default async function isFriend(
  friendId: string,
  email: string
): Promise<boolean | null> {
  const res = await fetch(
    `http://localhost:3000/api/friend/${friendId}/isFriend/${email}`
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

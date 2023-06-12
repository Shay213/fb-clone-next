export default async function isFriend(
  friendId: string,
  email: string
): Promise<boolean | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/friend/${friendId}/isFriend/${email}`
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

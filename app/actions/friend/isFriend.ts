export default async function isFriend(
  friendId: string,
  email: string
): Promise<boolean> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/friend/${friendId}/isFriend/${email}`
  );
  return res.json();
}

interface MutualFriend {
  id: string;
  firstName: string;
  lastName: string;
}

export default async function getMutualFriends(
  friendId: string,
  email: string
): Promise<MutualFriend[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/friend/${friendId}/mutualFriends/${email}`
  );
  return res.json();
}

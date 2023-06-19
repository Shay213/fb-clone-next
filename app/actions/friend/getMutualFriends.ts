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
    `http://localhost:3000/api/friend/${friendId}/mutualFriends/${email}`
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
}

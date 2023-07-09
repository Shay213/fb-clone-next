interface MutualFriend {
  id: string;
  firstName: string;
  lastName: string;
  picture: string | null;
}

export default async function getMutualFriends(
  userId: string,
  friendId: string
): Promise<MutualFriend[]> {
  const res = await fetch(
    `http://localhost:3000/api/friends/mutual/${userId}/${friendId}`
  );

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return res.json();
}

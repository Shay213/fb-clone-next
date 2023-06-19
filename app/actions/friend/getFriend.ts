interface Friend {
  id: string;
  firstName: string;
  lastName: string;
}

export default async function getFriend(friendId: string): Promise<Friend> {
  const res = await fetch(`http://localhost:3000/api/friend/${friendId}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

interface Friend {
  id: string;
  firstName: string;
  lastName: string;
}

export default async function getFriend(friendId: string): Promise<Friend> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/friend/${friendId}`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

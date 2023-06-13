interface Friend {
  id: string;
  firstName: string;
  lastName: string;
}

export default async function getFriends(userEmail: string): Promise<Friend[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/friends/${userEmail}`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

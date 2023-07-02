interface Friend {
  picture: string | null;
  id: string;
  lastName: string;
  firstName: string;
}

export default async function getUserFriends(
  userId: string,
  searchPhrase?: string
): Promise<Friend[]> {
  const res = await fetch(
    `http://localhost:3000/api/friends/${userId}${
      searchPhrase ? "?search=" + searchPhrase : ""
    }`
  );

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return res.json();
}

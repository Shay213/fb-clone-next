export interface Friend {
  id: string;
  firstName: string;
  lastName: string;
}

export default async function getFriends(
  userEmail: string,
  searchPhrase?: string
): Promise<Friend[]> {
  const res = await fetch(
    `http://localhost:3000/api/friends/${userEmail}${
      searchPhrase ? "?search=" + searchPhrase : ""
    }`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

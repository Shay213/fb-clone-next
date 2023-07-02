interface User {
  picture: string | null;
  id: string;
  lastName: string;
  firstName: string;
}

export default async function getUsers(searchPhrase?: string): Promise<User[]> {
  const res = await fetch(
    `http://localhost:3000/api/users${
      searchPhrase ? "?search=" + searchPhrase : ""
    }`
  );

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return res.json();
}

export default async function getUserId(userEmail: string): Promise<string> {
  const res = await fetch(`http://localhost:3000/api/user/${userEmail}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

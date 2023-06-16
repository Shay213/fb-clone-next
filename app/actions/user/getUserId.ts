export default async function getUserId(userEmail: string): Promise<string> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/${userEmail}`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

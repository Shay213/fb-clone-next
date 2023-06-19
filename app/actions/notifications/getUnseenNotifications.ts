export default async function getCountUnseenNotifications(
  userEmail: string
): Promise<number> {
  const res = await fetch(
    `http://localhost:3000/api/notifications/${userEmail}/seen`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

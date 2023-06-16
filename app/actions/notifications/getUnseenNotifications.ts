export default async function getCountUnseenNotifications(
  userEmail: string
): Promise<number> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notifications/${userEmail}/seen`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

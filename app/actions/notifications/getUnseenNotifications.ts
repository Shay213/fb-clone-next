export default async function getCountUnseenNotifications(
  userEmail: string
): Promise<number> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notifications/${userEmail}/seen`
  );

  return res.json();
}

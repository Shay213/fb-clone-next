export default async function getNotificationsCount(
  userId: string
): Promise<{ notificationsCount: number }> {
  const res = await fetch(
    `http://localhost:3000/api/notifications/${userId}/count`
  );

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return res.json();
}

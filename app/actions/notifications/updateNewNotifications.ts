export default async function updateNewNotifications() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notifications/updateNew`,
    { method: "PATCH" }
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

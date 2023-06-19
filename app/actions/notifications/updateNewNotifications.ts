export default async function updateNewNotifications() {
  const res = await fetch(`http://localhost:3000/api/notifications/updateNew`, {
    method: "PATCH",
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

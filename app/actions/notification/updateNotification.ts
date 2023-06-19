export default async function updateNotification(
  id: string,
  isNew?: boolean,
  read?: boolean
) {
  const res = await fetch(`http://localhost:3000/api/notification/update`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, new: isNew, read }),
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

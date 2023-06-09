export default async function updateNotification(
  id: string,
  isNew?: boolean,
  read?: boolean
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notification/update`,
    {
      method: "PATCH",
      body: JSON.stringify({ id, new: isNew, read }),
    }
  );
  return res.json();
}

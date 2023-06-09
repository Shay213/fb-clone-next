export default async function updateSeenNotifications(userEmail: string) {
  await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notifications/${userEmail}/seen`,
    {
      method: "PATCH",
    }
  );
}

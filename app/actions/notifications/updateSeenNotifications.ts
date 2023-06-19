export default async function updateSeenNotifications(userEmail: string) {
  await fetch(`http://localhost:3000/api/notifications/${userEmail}/seen`, {
    method: "PATCH",
  });
}

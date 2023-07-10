import { Notification } from "@prisma/client";

export type ExtendedNotification = Notification & {
  sender: {
    id: string;
    picture: string | null;
    firstName: string;
    lastName: string;
  };
};

export default async function getNotifications(
  userId: string
): Promise<ExtendedNotification[]> {
  const res = await fetch(`http://localhost:3000/api/notifications/${userId}`);

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return res.json();
}

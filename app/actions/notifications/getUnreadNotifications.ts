import { Notification } from "@prisma/client";

export interface ExtendedNotification extends Notification {
  sender: {
    id: string;
    firstName: string;
    lastName: string;
  };
}

export default async function getUnreadNotifications(
  userEmail: string
): Promise<ExtendedNotification[]> {
  const res = await fetch(
    `http://localhost:3000/api/notifications/${userEmail}/unread`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

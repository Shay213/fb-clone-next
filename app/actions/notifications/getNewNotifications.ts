import { Notification } from "@prisma/client";
import updateNewNotifications from "./updateNewNotifications";

export interface ExtendedNotification extends Notification {
  sender: {
    id: string;
    firstName: string;
    lastName: string;
  };
}

export default async function getNewNotifications(
  userEmail: string
): Promise<ExtendedNotification[]> {
  await updateNewNotifications();
  const res = await fetch(
    `http://localhost:3000/api/notifications/${userEmail}/new`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

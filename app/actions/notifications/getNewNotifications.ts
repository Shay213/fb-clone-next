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
    `${process.env.NEXT_PUBLIC_BASE_URL}/notifications/${userEmail}/new`
  );

  return res.json();
}
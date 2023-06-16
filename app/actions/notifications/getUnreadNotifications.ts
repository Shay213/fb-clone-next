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
    `${process.env.NEXT_PUBLIC_BASE_URL}/notifications/${userEmail}/unread`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

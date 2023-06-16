import { NotificationType } from "@prisma/client";

interface sendNotificationArgs {
  senderEmail: string;
  receiverId: string;
  type: NotificationType;
}

export default async function sendNotification(body: sendNotificationArgs) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notification/send`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

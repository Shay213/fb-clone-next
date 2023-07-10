import { NotificationType } from "@prisma/client";

export default async function sendNotification(body: {
  type: NotificationType;
  senderId: string;
  receiverId?: string;
}) {
  const res = await fetch("http://localhost:3000/api/notification/send", {
    method: "POST",
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }
}

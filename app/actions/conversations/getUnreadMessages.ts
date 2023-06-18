interface Response {
  unreadCount: number;
}

export default async function getUnreadMessages(
  userEmail: string
): Promise<Response> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/conversations/${userEmail}/messages/unread`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

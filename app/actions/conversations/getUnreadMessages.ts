interface Response {
  unreadCount: number;
}

export default async function getUnreadMessages(
  userEmail: string
): Promise<Response> {
  const res = await fetch(
    `http://localhost:3000/api/conversations/${userEmail}/messages/unread`,
    {
      next: { tags: [`conversation${userEmail}unread`] },
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

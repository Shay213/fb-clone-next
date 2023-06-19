export interface Conversation {
  id: string;
  messages: {
    id: string;
    description: string;
    createdAt: Date;
    read: boolean;
    sendedBy: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
    };
  }[];
}

export default async function getConversation(
  userId: string,
  friendId: string
): Promise<Conversation> {
  const res = await fetch(
    `http://localhost:3000/api/conversation/${userId}/${friendId}`,
    { next: { tags: [userId + friendId] } }
  );

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  const conversation = await res.json();
  if (!conversation) {
    // conversation does not exist
    const res = await fetch(
      `http://localhost:3000/api/conversation/${userId}/${friendId}`,
      { method: "POST" }
    );

    if (!res.ok) {
      throw new Error("Something went wrong!");
    }

    return res.json();
  }

  return conversation;
}

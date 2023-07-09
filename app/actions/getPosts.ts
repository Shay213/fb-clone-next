import { Post } from "@prisma/client";

export default async function getPosts(userId: string): Promise<
  (Post & {
    author: {
      id: string;
      firstName: string;
      lastName: string;
      picture: string | null;
    };
  })[]
> {
  const res = await fetch(`http://localhost:3000/api/posts/${userId}`);

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return res.json();
}

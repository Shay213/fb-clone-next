import { Post } from "@prisma/client";
import { ExtendedComment } from "./getPostComments";

export interface ExtendedPost extends Post {
  author: {
    id: string;
    firstName: string;
    lastName: string;
    picture: string | null;
  };
  comments: ExtendedComment[];
}

export default async function getPosts(
  userId: string
): Promise<ExtendedPost[]> {
  const res = await fetch(`http://localhost:3000/api/posts/${userId}`);

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return res.json();
}

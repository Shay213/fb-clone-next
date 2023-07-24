import { Comment } from "@prisma/client";

export interface ExtendedComment extends Comment {
  postedBy: {
    id: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
}

export default async function getPostComments(
  postId: string,
  numOfComments: number
): Promise<ExtendedComment[]> {
  const res = await fetch(
    `http://localhost:3000/api/post/${postId}/comments?count=${numOfComments}`
  );

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return res.json();
}

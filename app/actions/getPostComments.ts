import { Comment } from "@prisma/client";

export interface ExtendedComment extends Comment {
  postedBy: {
    id: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
}

interface getPostCommentsArgs {
  postId: string;
  take: number;
  skip: number;
}

export default async function getPostComments({
  postId,
  skip,
  take,
}: getPostCommentsArgs): Promise<ExtendedComment[]> {
  const res = await fetch(
    `http://localhost:3000/api/post/${postId}/comments?take=${take}&skip=${skip}`
  );

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return res.json();
}

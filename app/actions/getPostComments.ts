import { Comment } from "@prisma/client";

export interface ExtendedComment extends Comment {
  postedBy: {
    id: string;
    firstName: string;
    lastName: string;
    picture: string | null;
  };
}

export default async function getPostComments(
  excludeIds: string[],
  postId: string,
  take: number
): Promise<ExtendedComment[]> {
  const res = await fetch(
    `http://localhost:3000/api/post/${postId}/comments?excludeIds=${excludeIds.join(
      ","
    )}&take=${take}`
  );

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  return res.json();
}

export interface FeedPost {
  id: string;
  img?: string;
  createdAt: string;
  audience: string;
  description: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
  };
}

export const getFeedPosts = async (email: string): Promise<FeedPost[]> => {
  const res = await fetch(`http://localhost:3000/api/posts/${email}`, {
    next: { tags: ["feedPosts"] },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

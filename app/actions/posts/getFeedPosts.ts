export interface FeedPost {
  id: string;
  img?: string;
  createdAt: string;
  audience: string;
  description: string;
  author: {
    firstName: string;
    lastName: string;
  };
}

export const getFeedPosts = async (): Promise<FeedPost[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`, {
    cache: "no-store",
  });
  return res.json();
};

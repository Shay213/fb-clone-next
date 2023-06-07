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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${email}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};

export default async function getLikesCount(postId: string): Promise<number> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/likes/${postId}`
  );

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
}

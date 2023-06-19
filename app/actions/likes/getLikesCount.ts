export default async function getLikesCount(postId: string): Promise<number> {
  const res = await fetch(`http://localhost:3000/api/likes/${postId}`);

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
}

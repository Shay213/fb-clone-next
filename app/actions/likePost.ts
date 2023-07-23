export default async function likePost(body: {
  postId: string;
  userId: string;
}) {
  const res = await fetch("http://localhost:3000/api/post/like", {
    method: "PATCH",
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }
}

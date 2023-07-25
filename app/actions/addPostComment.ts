export default async function addPostComment(
  postId: string,
  description: string,
  postedById: string
) {
  const res = await fetch(
    `http://localhost:3000/api/post/${postId}/comments/add`,
    {
      method: "POST",
      body: JSON.stringify({ description, postedById }),
    }
  );

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }
}

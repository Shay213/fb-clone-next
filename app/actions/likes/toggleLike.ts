export default async function toggleLike(userEmail: string, postId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/like`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userEmail, postId }),
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

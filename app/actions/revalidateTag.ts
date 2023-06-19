export default async function revalidateTag(tag: string) {
  const res = await fetch(`http://localhost:3000/api/revalidate?tag=${tag}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
}

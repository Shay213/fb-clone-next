export interface Author {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export default async function getAuthor(postId: string): Promise<Author> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/${postId}/author`
  );
  return res.json();
}

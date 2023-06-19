export interface Author {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export default async function getAuthor(postId: string): Promise<Author> {
  const res = await fetch(`http://localhost:3000/api/post/${postId}/author`);
  return res.json();
}

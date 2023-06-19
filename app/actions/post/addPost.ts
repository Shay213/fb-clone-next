import { Audience } from "@prisma/client";
import revalidateTag from "../revalidateTag";

interface Body {
  description: string;
  audience: Audience;
  email: string;
  img?: string;
}

export default async function addPost(body: Body) {
  const res = await fetch(`http://localhost:3000/api/post`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  revalidateTag("feedPosts");

  return res.json();
}

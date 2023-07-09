import { AUDIENCE } from "../(site)/@modals/modals/addPost/components/Form";

export default async function addPost(body: {
  description: string;
  audience: AUDIENCE;
  authorId: string;
  img?: string;
}) {
  const res = await fetch("http://localhost:3000/api/post/add", {
    method: "POST",
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }
}

import getPosts from "@/app/actions/getPosts";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { notFound } from "next/navigation";
import Content from "./Content";

const Posts = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return notFound();
  }
  const posts = await getPosts(session.user.id);

  return <Content initialPosts={posts} userId={session.user.id} />;
};

export default Posts;

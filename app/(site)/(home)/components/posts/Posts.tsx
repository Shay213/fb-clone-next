import React from "react";
import Post from "./Post";
import getPosts from "@/app/actions/getPosts";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { notFound } from "next/navigation";

const Posts = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return notFound();
  }
  const posts = await getPosts(session.user.id);

  return (
    <div className="my-4 flex flex-col gap-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;

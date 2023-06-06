import React from "react";
import Post from "./Post";
import { FeedPost } from "@/app/actions/posts/getFeedPosts";

interface PostsProps {
  promise: Promise<FeedPost[]>;
}

const Posts = async ({ promise }: PostsProps) => {
  const posts = await promise;

  return (
    <div className="my-4 flex flex-col gap-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;

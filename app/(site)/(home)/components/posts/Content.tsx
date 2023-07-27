"use client";
import React, { useState } from "react";

import Post from "./Post";
import { ExtendedPost } from "@/app/actions/getPosts";
import usePusherClientFeed from "./hooks/usePusherClientFeed";

const Content = ({
  initialPosts,
  userId,
}: {
  initialPosts: ExtendedPost[];
  userId: string;
}) => {
  const [posts, setPosts] = useState(initialPosts);

  usePusherClientFeed({ posts, setPosts, userId });

  return (
    <div className="my-4 flex flex-col gap-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} userId={userId} />
      ))}
    </div>
  );
};

export default Content;

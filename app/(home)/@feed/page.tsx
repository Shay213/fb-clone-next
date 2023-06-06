import React, { Suspense } from "react";
import ReelsAndStories from "../components/reelsAndStories/ReelsAndStories";
import AddPost from "../components/addPost/AddPost";
import Posts from "../components/posts/Posts";
import Loader from "@/app/components/Loader";
import { getFeedPosts } from "@/app/actions/posts/getFeedPosts";

const Feed = () => {
  const posts = getFeedPosts();

  return (
    <div
      className="
        overflow-auto z-10 pt-4 px-4 min-w-[450px] w-1/2 max-w-2xl
      "
    >
      <ReelsAndStories />
      <AddPost />
      <Suspense fallback={<Loader />}>
        {/* @ts-ignore8*/}
        <Posts promise={posts} />
      </Suspense>
    </div>
  );
};

export default Feed;

import React, { Suspense } from "react";
import ReelsAndStories from "../components/reelsAndStories/ReelsAndStories";
import AddPost from "../components/addPost/AddPost";
import Posts from "../components/posts/Posts";
import Loader from "@/app/components/Loader";
import { getFeedPosts } from "@/app/actions/posts/getFeedPosts";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const Feed = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }
  const posts = getFeedPosts(session.user.email);

  return (
    <div
      className="
        overflow-auto z-10 pt-4 px-4 min-w-[450px] w-1/2 max-w-2xl
      "
    >
      <ReelsAndStories />
      <AddPost />
      <Suspense fallback={<Loader />}>
        {/* @ts-ignore*/}
        <Posts promise={posts} />
      </Suspense>
    </div>
  );
};

export default Feed;

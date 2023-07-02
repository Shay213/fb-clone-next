import React, { Suspense } from "react";
import ReelsAndStories from "../components/reelsAndStories/ReelsAndStories";
import AddPost from "../../components/addPost/AddPost";
import Posts from "../components/posts/Posts";
import Loader from "../../components/Loader";

const Feed = () => {
  return (
    <div
      className="
        overflow-auto z-10 pt-4 px-4 min-w-[450px] w-1/2 max-w-2xl
      "
    >
      <ReelsAndStories />
      <AddPost />
      <Suspense
        fallback={
          <div className="my-4">
            <Loader />
          </div>
        }
      >
        <Posts />
      </Suspense>
    </div>
  );
};

export default Feed;

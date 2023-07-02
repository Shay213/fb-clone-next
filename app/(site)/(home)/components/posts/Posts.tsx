import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="my-4 flex flex-col gap-4">
      {[].map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <div className="h-[1000px]">test</div>
    </div>
  );
};

export default Posts;

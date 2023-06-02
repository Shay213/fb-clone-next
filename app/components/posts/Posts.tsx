import React from "react";
import Post from "./Post";

const POSTS = [
  {
    id: 1,
    img: "",
    name: "John Doe",
    postedAt: "9h",
    whoCanSeeIt: "public",
    description: "lorem ipsum lorem ipsum lorem ipsum",
    postImg:
      "https://images.pexels.com/photos/16972099/pexels-photo-16972099/free-photo-of-lato-zwierze-pies-uroczy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    likes: 300,
    comments: 100,
    shares: 20,
  },
];

const Posts = () => {
  return (
    <div className="my-4">
      {POSTS.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;

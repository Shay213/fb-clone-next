import React from "react";
import ReelsAndStories from "./components/reelsAndStories/ReelsAndStories";
import AddPost from "./components/addPost/AddPost";
import Posts from "./components/posts/Posts";
import Contacts from "./components/contacts/Contacts";

const Home = () => {
  return (
    <>
      <div
        className="
          overflow-auto z-10 pt-4 px-4 min-w-[450px] w-1/2 max-w-2xl
        "
      >
        <ReelsAndStories />
        <AddPost />
        <Posts />
      </div>
      <Contacts />
    </>
  );
};

export default Home;

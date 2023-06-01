import React from "react";

import Sidebar from "./components/sidebar/Sidebar";
import Reels from "./components/reels/Reels";
import AddPost from "./components/addPost/AddPost";
import Posts from "./components/posts/Posts";
import Contacts from "./components/contacts/Contacts";

const Home = () => {
  return (
    <div
      className="
        grid grid-cols-[minmax(240px,_1fr),_minmax(400px,_2fr),_minmax(200px,_1fr)] 
        w-full bg-[#E9EEF0]
      "
    >
      <Sidebar />
      <div>
        <Reels />
        <AddPost />
        <Posts />
      </div>
      <Contacts />
    </div>
  );
};

export default Home;

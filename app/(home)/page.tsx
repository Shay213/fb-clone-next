import React from "react";

import Sidebar from "./components/Sidebar";
import Reels from "./components/Reels";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
import Messages from "./components/Messages";

const Home = () => {
  return (
    <div
      className="
        grid grid-cols-[minmax(200px,_1fr),_minmax(400px,_2fr),_minmax(200px,_1fr)] 
        w-full bg-[#E9EEF0]
      "
    >
      <Sidebar />
      <div>
        <Reels />
        <AddPost />
        <Posts />
      </div>
      <Messages />
    </div>
  );
};

export default Home;

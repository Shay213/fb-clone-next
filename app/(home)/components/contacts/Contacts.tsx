import React from "react";
import Header from "./Header";
import Groups from "./Groups";
import Friends from "./Friends";

const Contacts = () => {
  return (
    <div
      className="
        sticky top-[70px] h-[calc(100vh-70px)] pr-2 
        overflow-auto z-10 min-w-[180px] w-1/4 max-w-[280px]
      "
    >
      <Header />
      <Friends />
      <hr className="border-gray-300 my-4" />
      <Groups />
    </div>
  );
};

export default Contacts;

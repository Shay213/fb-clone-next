import React from "react";
import Header from "./Header";
import Groups from "./Groups";
import Friends from "./Friends";

const Contacts = () => {
  return (
    <div
      className="
        sticky top-[70px] h-[calc(100vh-70px)] pr-2 
        overflow-auto z-10 max-w-[300px] justify-self-end
        w-full
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

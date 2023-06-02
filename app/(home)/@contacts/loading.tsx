import React from "react";
import Header from "../components/contacts/Header";

const Loading = () => {
  return (
    <div
      className="
        sticky top-[70px] h-[calc(100vh-70px)] pr-2 
        overflow-auto z-10 min-w-[180px] w-1/4 max-w-[280px]
      "
    >
      <Header />
    </div>
  );
};

export default Loading;

import React from "react";

import { BiDotsHorizontalRounded } from "react-icons/bi";

const Heading = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-xl font-semibold">Notifications</h1>
      <div
        className="
          flex justify-center items-center p-1 rounded-full 
          bg-gray-200 hover:bg-gray-300 cursor-pointer transition
        "
      >
        <BiDotsHorizontalRounded size={18} className="fill-gray-600" />
      </div>
    </div>
  );
};

export default Heading;

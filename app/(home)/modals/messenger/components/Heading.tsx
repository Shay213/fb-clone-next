import React from "react";

import { BiDotsHorizontalRounded, BiMessageSquareEdit } from "react-icons/bi";
import { AiOutlineFullscreen } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";

const Heading = () => {
  return (
    <div className="flex items-center justify-between gap-14">
      <h1 className="text-2xl font-semibold">Chats</h1>
      <div className="flex items-center gap-2">
        <div
          className="
            flex justify-center items-center p-1
            bg-gray-200 hover:bg-gray-300 transition cursor-pointer
            rounded-full
          "
        >
          <BiDotsHorizontalRounded size={20} className="fill-gray-700" />
        </div>
        <div
          className="
            flex justify-center items-center p-1
            bg-gray-200 hover:bg-gray-300 transition cursor-pointer
            rounded-full
          "
        >
          <AiOutlineFullscreen size={20} className="fill-gray-700" />
        </div>
        <div
          className="
            flex justify-center items-center p-1 
            bg-gray-200 hover:bg-gray-300 transition cursor-pointer
            rounded-full
          "
        >
          <BsFillCameraVideoFill size={20} className="fill-gray-700" />
        </div>
        <div
          className="
            flex justify-center items-center p-1
            bg-gray-200 hover:bg-gray-300 transition cursor-pointer
            rounded-full
          "
        >
          <BiMessageSquareEdit size={20} className="fill-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default Heading;

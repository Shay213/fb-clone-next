import React from "react";

import { BiDotsHorizontalRounded, BiMessageSquareEdit } from "react-icons/bi";
import { AiOutlineFullscreen } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";

const Heading = () => {
  return (
    <div className="flex items-center justify-between gap-14">
      <h1 className="text-2xl font-semibold dark:text-zinc-200">Chats</h1>
      <div className="flex items-center gap-2">
        <div
          className="
            flex justify-center items-center p-1
            bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 
            dark:hover:bg-zinc-600 transition cursor-pointer rounded-full
          "
        >
          <BiDotsHorizontalRounded
            size={20}
            className="fill-gray-700 dark:fill-zinc-200"
          />
        </div>
        <div
          className="
            flex justify-center items-center p-1
            bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 
            transition cursor-pointer rounded-full dark:hover:bg-zinc-600
          "
        >
          <AiOutlineFullscreen
            size={20}
            className="fill-gray-700 dark:fill-zinc-200"
          />
        </div>
        <div
          className="
            flex justify-center items-center p-1 
            bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 
            transition cursor-pointer rounded-full dark:hover:bg-zinc-600
          "
        >
          <BsFillCameraVideoFill
            size={20}
            className="fill-gray-700 dark:fill-zinc-200"
          />
        </div>
        <div
          className="
            flex justify-center items-center p-1
            bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 
            transition cursor-pointer rounded-full dark:hover:bg-zinc-600
          "
        >
          <BiMessageSquareEdit
            size={20}
            className="fill-gray-700 dark:fill-zinc-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;

import React from "react";

import { AiFillVideoCamera } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { CiFaceSmile } from "react-icons/ci";
import Avatar from "./Avatar";
import Button from "./Button";

const AddPost = () => {
  return (
    <div className="mt-4 bg-white dark:bg-zinc-800 rounded-md shadow-lg py-2 px-6">
      <div className="flex items-center gap-3">
        <Avatar />
        <Button />
      </div>
      <hr className="my-2 dark:border-zinc-600" />
      <div className="flex">
        <div
          className="
            flex items-center justify-center gap-2 flex-1 py-2
            hover:bg-gray-200 transition cursor-pointer rounded-md
            dark:hover:bg-zinc-700
          "
        >
          <AiFillVideoCamera className="fill-red-500" size={25} />
          <span className="text-gray-600 dark:text-zinc-300 text-sm">
            Live video
          </span>
        </div>
        <div
          className="
            flex items-center justify-center gap-2 flex-1 py-2
            hover:bg-gray-200 transition cursor-pointer rounded-md
            dark:hover:bg-zinc-700
          "
        >
          <BsImages className="fill-green-500" size={25} />
          <span className="text-gray-600 dark:text-zinc-300 text-sm">
            Photo/video
          </span>
        </div>
        <div
          className="
            flex items-center justify-center gap-2 flex-1 py-2
            hover:bg-gray-200 transition cursor-pointer rounded-md
            dark:hover:bg-zinc-700
          "
        >
          <CiFaceSmile className="fill-amber-500" size={25} />
          <span className="text-gray-600 dark:text-zinc-300 text-sm">
            Feeling/activity
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddPost;

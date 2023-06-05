import React from "react";

import { IoMdClose } from "react-icons/io";

const Heading = () => {
  return (
    <div
      className="
        flex items-center p-3 border-b-[1px]
        border-gray-200 dark:border-zinc-700
      "
    >
      <div className="flex-1 text-center text-2xl font-semibold">
        Create post
      </div>
      <div
        className="
          flex justify-center items-center p-2 cursor-pointer
          rounded-full bg-gray-200 hover:bg-gray-300
          dark:bg-zinc-700 dark:hover:bg-zinc-600 transition
        "
      >
        <IoMdClose size={20} className="fill-gray-700 dark:fill-zinc-200" />
      </div>
    </div>
  );
};

export default Heading;

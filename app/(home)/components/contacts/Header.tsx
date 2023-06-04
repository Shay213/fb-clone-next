import React from "react";

import { IoIosVideocam } from "react-icons/io";
import { RxMagnifyingGlass } from "react-icons/rx";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-600 dark:text-zinc-300 text-base">
        Contacts
      </span>
      <div className="flex items-center gap-3">
        <div
          className="
            w-6 h-6 flex items-center justify-center rounded-full
            hover:bg-gray-300 cursor-pointer transition
            dark:hover:bg-zinc-700
          "
        >
          <IoIosVideocam className="fill-gray-700 dark:fill-zinc-300" />
        </div>
        <div
          className="
            w-6 h-6 flex items-center justify-center rounded-full
            hover:bg-gray-300 cursor-pointer transition
            dark:hover:bg-zinc-700
          "
        >
          <RxMagnifyingGlass className="fill-gray-700 dark:fill-zinc-300 dark:text-zinc-300" />
        </div>
        <div
          className="
            w-6 h-6 flex items-center justify-center rounded-full
            hover:bg-gray-300 cursor-pointer transition
            dark:hover:bg-zinc-700
          "
        >
          <BiDotsHorizontalRounded className="fill-gray-700 dark:fill-zinc-300" />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";

import { IoIosVideocam } from "react-icons/io";
import { RxMagnifyingGlass } from "react-icons/rx";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-600 text-base">Contacts</span>
      <div className="flex items-center gap-3">
        <div
          className="
            w-6 h-6 flex items-center justify-center rounded-full
            hover:bg-gray-300 cursor-pointer transition
          "
        >
          <IoIosVideocam className="fill-gray-700" />
        </div>
        <div
          className="
            w-6 h-6 flex items-center justify-center rounded-full
            hover:bg-gray-300 cursor-pointer transition
          "
        >
          <RxMagnifyingGlass className="fill-gray-700" />
        </div>
        <div
          className="
            w-6 h-6 flex items-center justify-center rounded-full
            hover:bg-gray-300 cursor-pointer transition
          "
        >
          <BiDotsHorizontalRounded className="fill-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default Header;

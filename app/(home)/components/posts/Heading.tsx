import React from "react";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Avatar from "./Avatar";
import AuthorName from "./AuthorName";

interface HeadingProps {
  img?: string | null;
  name: string;
  postedAt: string;
  whoCanSeeIt: string;
}

const Heading = ({ img, name, postedAt, whoCanSeeIt }: HeadingProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <Avatar img={img} />
        <div className="flex flex-col">
          <AuthorName name={name} />
          <div className="text-xs dark:text-zinc-400">{`${postedAt} ${whoCanSeeIt}`}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <div
          className="
            w-9 h-9 flex justify-center items-center rounded-full 
            hover:bg-gray-200 transition cursor-pointer
            dark:hover:bg-zinc-700
          "
        >
          <BiDotsHorizontalRounded className="dark:fill-zinc-300" />
        </div>
        <div
          className="
            w-9 h-9 flex justify-center items-center rounded-full 
            hover:bg-gray-200 transition cursor-pointer
            dark:hover:bg-zinc-700
          "
        >
          <AiOutlineClose className="dark:fill-zinc-300" />
        </div>
      </div>
    </div>
  );
};

export default Heading;

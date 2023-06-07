import React from "react";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Avatar from "./Avatar";
import AuthorName from "./AuthorName";
import UserBox from "./UserBox";

interface HeadingProps {
  img?: string | null;
  name: string;
  postedAt: string;
  whoCanSeeIt: string;
  postId: string;
  authorId: string;
}

const Heading = ({
  img,
  name,
  postedAt,
  whoCanSeeIt,
  postId,
  authorId,
}: HeadingProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <Avatar img={img}>
          {/* @ts-ignore */}
          <UserBox postId={postId} authorId={authorId} />
        </Avatar>
        <div className="flex flex-col">
          <AuthorName name={name}>
            {/* @ts-ignore */}
            <UserBox postId={postId} authorId={authorId} />
          </AuthorName>
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

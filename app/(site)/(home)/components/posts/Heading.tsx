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
  authorId: string;
  currUserId: string;
}

const Heading = async ({
  img,
  name,
  postedAt,
  whoCanSeeIt,
  authorId,
  currUserId,
}: HeadingProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <Avatar img={img}>
          <UserBox
            authorId={authorId}
            name={name}
            img={img}
            currUserId={currUserId}
          />
        </Avatar>
        <div className="flex flex-col">
          <AuthorName name={name}>
            <UserBox
              authorId={authorId}
              name={name}
              img={img}
              currUserId={currUserId}
            />
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

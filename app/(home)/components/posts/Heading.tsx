import Image from "next/image";
import React from "react";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

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
        <Image
          src={img || "/avatar.jpeg"}
          alt="user"
          width={35}
          height={35}
          className="object-cover rounded-full"
        />
        <div className="flex flex-col">
          <div>
            <span className="text-sm font-semibold">{name}</span>
          </div>
          <div className="text-xs">{`${postedAt} ${whoCanSeeIt}`}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-9 h-9 flex justify-center items-center rounded-full hover:bg-gray-200 transition cursor-pointer">
          <BiDotsHorizontalRounded />
        </div>
        <div className="w-9 h-9 flex justify-center items-center rounded-full hover:bg-gray-200 transition cursor-pointer">
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default Heading;

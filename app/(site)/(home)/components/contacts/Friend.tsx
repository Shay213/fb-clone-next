import Image from "next/image";
import React from "react";
import { User } from "@prisma/client";

interface FriendProps {
  user: User;
  handleClick: () => void;
}

const Friend = ({ user, handleClick }: FriendProps) => {
  return (
    <div
      className="flex items-center gap-3 p-2 cursor-pointer 
        hover:bg-gray-300 transition rounded-md relative
        dark:hover:bg-zinc-700
      "
      onClick={handleClick}
    >
      <Image
        src={user.picture || "/avatar.jpeg"}
        alt="friend"
        width={35}
        height={35}
        className="rounded-full object-cover"
      />
      <div className="w-2 h-2 rounded-full bg-green-500 absolute left-[35px] bottom-3"></div>

      <span className="text-sm text-gray-700 dark:text-zinc-300">{`${user.firstName} ${user.lastName}`}</span>
    </div>
  );
};

export default Friend;

"use client";

import React from "react";

import { BiUserCheck } from "react-icons/bi";

interface RemoveFriendProps {
  friendId: string;
}

const RemoveFriend = ({ friendId }: RemoveFriendProps) => {
  return (
    <button
      type="button"
      className="
      flex gap-2 justify-center items-center w-max 
      px-6 py-2 bg-gray-200 rounded-md text-gray-800
      hover:bg-gray-300 transition font-normal
      dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:text-zinc-200
    "
      onClick={() => {}}
    >
      <BiUserCheck size={21} />
      Friends
    </button>
  );
};

export default RemoveFriend;

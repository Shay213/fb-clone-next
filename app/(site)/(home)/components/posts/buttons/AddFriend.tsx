"use client";

import React from "react";

import { BiUserPlus } from "react-icons/bi";

interface AddFriendProps {
  friendId: string;
}

const AddFriend = ({ friendId }: AddFriendProps) => {
  return (
    <button
      type="button"
      className="
          flex gap-2 justify-center items-center w-max 
          px-6 py-2 bg-blue-500 rounded-md text-white
          hover:bg-blue-600 transition font-normal
          dark:bg-blue-600 dark:hover:bg-blue-500
        "
      onClick={() => {}}
    >
      <BiUserPlus size={21} />
      Add Friend
    </button>
  );
};

export default AddFriend;

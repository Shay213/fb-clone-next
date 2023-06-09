"use client";

import React, { useCallback } from "react";
import { useSession } from "next-auth/react";

import { BiUserCheck } from "react-icons/bi";
import toast from "react-hot-toast";
import removeFriend from "@/app/actions/friend/removeFriend";

interface RemoveFriendProps {
  friendId: string;
}

const RemoveFriend = ({ friendId }: RemoveFriendProps) => {
  const { data: session } = useSession();

  const handleClick = useCallback(() => {
    if (session?.user?.email) {
      removeFriend(session?.user?.email, friendId)
        .then((res) => {
          toast.success("Removed friend successfully");
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    }
  }, [friendId, session?.user?.email]);

  return (
    <button
      type="button"
      className="
      flex gap-2 justify-center items-center w-max 
      px-6 py-2 bg-gray-200 rounded-md text-gray-800
      hover:bg-gray-300 transition font-normal
      dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:text-zinc-200
    "
      onClick={handleClick}
    >
      <BiUserCheck size={21} />
      Friends
    </button>
  );
};

export default RemoveFriend;

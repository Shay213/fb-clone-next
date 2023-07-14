"use client";

import removeFriend from "@/app/actions/removeFriend";
import sendNotification from "@/app/actions/sendNotification";
import React from "react";
import { toast } from "react-hot-toast";

import { BiUserCheck } from "react-icons/bi";

interface RemoveFriendProps {
  friendId: string;
  userId: string;
}

const RemoveFriend = ({ friendId, userId }: RemoveFriendProps) => {
  return (
    <button
      type="button"
      className="
      flex gap-2 justify-center items-center w-max 
      px-6 py-2 bg-gray-200 rounded-md text-gray-800
      hover:bg-gray-300 transition font-normal
      dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:text-zinc-200
    "
      onClick={async () => {
        try {
          await removeFriend(userId, friendId);
          sendNotification({
            type: "REMOVED_FROM_FRIENDS",
            senderId: userId,
            receiverId: friendId,
          });
          // update alreadyFriends
          // update feed posts
          // update contacts
          toast.success("Removed friend");
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      }}
    >
      <BiUserCheck size={21} />
      Friends
    </button>
  );
};

export default RemoveFriend;

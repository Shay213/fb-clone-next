"use client";

import revalidateTag from "@/app/actions/revalidateTag";
import sendNotification from "@/app/actions/sendNotification";
import React from "react";
import toast from "react-hot-toast";

import { BiUserPlus } from "react-icons/bi";

interface AddFriendProps {
  friendId: string;
  userId: string;
}

const AddFriend = ({ friendId, userId }: AddFriendProps) => {
  return (
    <button
      type="button"
      className="
          flex gap-2 justify-center items-center w-max 
          px-6 py-2 bg-blue-500 rounded-md text-white
          hover:bg-blue-600 transition font-normal
          dark:bg-blue-600 dark:hover:bg-blue-500
        "
      onClick={async () => {
        try {
          await sendNotification({
            type: "FRIEND_REQUEST",
            senderId: userId,
            receiverId: friendId,
          });
          toast.success("Sended friend request");
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      }}
    >
      <BiUserPlus size={21} />
      Add Friend
    </button>
  );
};

export default AddFriend;

"use client";

import React, { useCallback } from "react";
import { useSession } from "next-auth/react";

import { BiUserPlus } from "react-icons/bi";
import { toast } from "react-hot-toast";
import sendNotification from "@/app/actions/notification/sendNotification";
import { NotificationType } from "@prisma/client";

interface AddFriendProps {
  friendId: string;
}

const AddFriend = ({ friendId }: AddFriendProps) => {
  const { data: session } = useSession();

  const handleClick = useCallback(() => {
    if (session?.user?.email) {
      const body = {
        senderEmail: session?.user?.email,
        receiverId: friendId,
        type: NotificationType.FRIEND_REQUEST,
      };
      sendNotification(body)
        .then(() => {
          toast.success("Friends request sended successfully");
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
          px-6 py-2 bg-blue-500 rounded-md text-white
          hover:bg-blue-600 transition font-normal
          dark:bg-blue-600 dark:hover:bg-blue-500
        "
      onClick={handleClick}
    >
      <BiUserPlus size={21} />
      Add Friend
    </button>
  );
};

export default AddFriend;

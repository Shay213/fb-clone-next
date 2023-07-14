"use client";

import addFriend from "@/app/actions/addFriend";
import React from "react";
import { toast } from "react-hot-toast";

const Buttons = ({
  id,
  currUserId,
  senderId,
  senderName,
  userName,
}: {
  id: string;
  currUserId: string;
  senderId: string;
  senderName: string;
  userName: string;
}) => {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        className="px-2 py-1 bg-green-500 rounded-md transition hover:bg-green-600 text-white"
        onClick={async () => {
          try {
            await addFriend(currUserId, senderId);
            // send notification to second user
            // update posts feed
            toast.success(`You and ${senderName} are now friends`);
          } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
          }
        }}
      >
        Accept
      </button>
      <button
        type="button"
        className="px-2 py-1 bg-red-500 rounded-md transition hover:bg-red-600 text-white"
        onClick={() => {}}
      >
        Decline
      </button>
    </div>
  );
};

export default Buttons;

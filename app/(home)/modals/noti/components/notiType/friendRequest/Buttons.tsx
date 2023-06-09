"use client";

import addFriend from "@/app/actions/friend/addFriend";
import updateNotification from "@/app/actions/notification/updateNotification";
import React, { useCallback } from "react";
import { toast } from "react-hot-toast";

const Buttons = ({
  id,
  currUserId,
  senderId,
  senderName,
}: {
  id: string;
  currUserId: string;
  senderId: string;
  senderName: string;
}) => {
  const handleAccept = useCallback(() => {
    updateNotification(id, false, true);
    addFriend(currUserId, senderId)
      .then(() => {
        toast.success(`You and ${senderName} are now friends!`);
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  }, [id, currUserId, senderId, senderName]);
  const handleDecline = useCallback(() => {
    updateNotification(id, false, true);
  }, [id]);
  return (
    <div className="flex gap-2">
      <button
        type="button"
        className="px-2 py-1 bg-green-500 rounded-md transition hover:bg-green-600 text-white"
        onClick={handleAccept}
      >
        Accept
      </button>
      <button
        type="button"
        className="px-2 py-1 bg-red-500 rounded-md transition hover:bg-red-600 text-white"
        onClick={handleDecline}
      >
        Decline
      </button>
    </div>
  );
};

export default Buttons;

"use client";

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
  return (
    <div className="flex gap-2">
      <button
        type="button"
        className="px-2 py-1 bg-green-500 rounded-md transition hover:bg-green-600 text-white"
        onClick={() => {}}
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

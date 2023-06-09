"use client";

import { useModalsContext } from "@/app/providers/ModalsProvider";
import { pusherClient } from "@/lib/pusher";
import React, { useEffect, useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { useSession } from "next-auth/react";

const markCurrentNotificationsAsSeen = async (userId: string) => {
  const res = await fetch("http://localhost:3000/api/notifications/seen", {
    method: "PATCH",
    body: JSON.stringify({ userId }),
  });

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }
};

const Noti = ({
  size,
  initialNotificationsCount,
  userId,
}: {
  size: number;
  initialNotificationsCount: number;
  userId?: string;
}) => {
  const [notificationsCount, setNotificationsCount] = useState(
    initialNotificationsCount
  );
  const homeModalsContext = useModalsContext();
  const isOpen = !!homeModalsContext?.noti.isOpen;
  const { data: session } = useSession();

  useEffect(() => {
    const handler = () => {
      setNotificationsCount((prev) => prev + 1);
    };

    pusherClient.subscribe(`notifications-count-${userId}`);
    pusherClient.bind("new-notifications-count", handler);

    return () => {
      pusherClient.unsubscribe(`notifications-count-${userId}`);
      pusherClient.unbind("new-notifications-count", handler);
    };
  }, [userId]);

  useEffect(() => {
    if (isOpen && session && notificationsCount > 0) {
      markCurrentNotificationsAsSeen(session.user.id);
      setNotificationsCount(0);
    }
  }, [isOpen, notificationsCount, session]);

  return (
    <div
      className={`
        h-10 w-10 flex items-center relative
        justify-center rounded-full cursor-pointer
        transition-colors ${
          isOpen
            ? "bg-blue-200 hover:bg-blue-300"
            : "hover:bg-gray-300 bg-gray-200 dark:hover:bg-zinc-500 dark:bg-zinc-600"
        } 
      `}
      onClick={() => {
        homeModalsContext?.hideOthers("noti");
        homeModalsContext?.noti.toggle();
      }}
    >
      <IoIosNotifications
        size={size}
        className={`${
          isOpen ? "text-blue-700" : "text-gray-900 dark:text-zinc-200"
        }`}
      />
      <div
        className="
        h-[18px] w-[18px] rounded-full flex items-center 
        justify-center absolute top-0 right-0 bg-red-500 
        text-white text-sm"
      >
        {notificationsCount}
      </div>
    </div>
  );
};

export default Noti;

"use client";

import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";
import React, { useMemo } from "react";
import { IoIosNotifications } from "react-icons/io";
import { useSession } from "next-auth/react";
import updateSeenNotifications from "@/app/actions/notifications/updateSeenNotifications";

const Noti = ({
  size,
  children,
}: {
  size: number;
  children: React.ReactNode;
}) => {
  const homeModalsContext = useHomeModalsContext();
  const isOpen = useMemo(() => {
    return !!homeModalsContext?.noti.isOpen;
  }, [homeModalsContext?.noti.isOpen]);
  const { data: session } = useSession();

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
      onClick={async () => {
        homeModalsContext?.hideOthers("noti");
        homeModalsContext?.noti.toggle();
        if (session?.user?.email)
          await updateSeenNotifications(session?.user?.email);
      }}
    >
      <IoIosNotifications
        size={size}
        className={`${
          isOpen ? "text-blue-700" : "text-gray-900 dark:text-zinc-200"
        }`}
      />
      {children}
    </div>
  );
};

export default Noti;

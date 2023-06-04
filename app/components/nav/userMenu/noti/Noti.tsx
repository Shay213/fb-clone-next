"use client";

import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";
import React, { useMemo } from "react";
import { IoIosNotifications } from "react-icons/io";

const Noti = ({ size }: { size: number }) => {
  const homeModalsContext = useHomeModalsContext();
  const isOpen = useMemo(() => {
    return !!homeModalsContext?.noti.isOpen;
  }, [homeModalsContext?.noti.isOpen]);

  return (
    <div
      className={`
        h-10 w-10 flex items-center 
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
    </div>
  );
};

export default Noti;

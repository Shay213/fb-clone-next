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
        bg-gray-200 h-10 w-10 flex items-center 
        justify-center rounded-full cursor-pointer hover:bg-gray-300
        transition-colors ${
          isOpen
            ? "bg-blue-200 hover:bg-blue-300"
            : "hover:bg-gray-300 bg-gray-200"
        } 
      `}
      onClick={() => {
        homeModalsContext?.hideOthers("noti");
        homeModalsContext?.noti.toggle();
      }}
    >
      <IoIosNotifications
        size={size}
        className={`${isOpen ? "text-blue-700" : "text-gray-900"}`}
      />
    </div>
  );
};

export default Noti;

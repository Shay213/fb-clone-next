"use client";

import React, { useMemo } from "react";
import { AiFillMessage } from "react-icons/ai";
import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";

const Messenger = ({
  children,
  size,
}: {
  children: React.ReactNode;
  size: number;
}) => {
  const homeModalsContext = useHomeModalsContext();
  const isOpen = useMemo(() => {
    return !!homeModalsContext?.messenger.isOpen;
  }, [homeModalsContext?.messenger.isOpen]);

  return (
    <>
      <div
        className={`
         h-10 w-10 flex items-center transition-colors
        justify-center rounded-full cursor-pointer relative
        ${
          isOpen
            ? "bg-blue-200 hover:bg-blue-300"
            : "hover:bg-gray-300 bg-gray-200 dark:hover:bg-zinc-500 dark:bg-zinc-600"
        } 
      `}
        onClick={() => {
          homeModalsContext?.hideOthers("messenger");
          homeModalsContext?.messenger.toggle();
        }}
      >
        <AiFillMessage
          size={size}
          className={`${
            isOpen ? "text-blue-700" : "text-gray-900 dark:text-zinc-200"
          }`}
        />
        {children}
      </div>
    </>
  );
};

export default Messenger;

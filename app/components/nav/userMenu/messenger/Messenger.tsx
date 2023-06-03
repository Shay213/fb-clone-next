"use client";

import React, { useMemo } from "react";
import { AiFillMessage } from "react-icons/ai";
import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";

const Messenger = ({ size }: { size: number }) => {
  const homeModalsContext = useHomeModalsContext();
  const isOpen = useMemo(
    () => !!homeModalsContext?.isModalOpen?.messenger,
    [homeModalsContext?.isModalOpen?.messenger]
  );

  return (
    <>
      <div
        className={`
         h-10 w-10 flex items-center transition-colors
        justify-center rounded-full cursor-pointer 
        ${
          isOpen
            ? "bg-blue-200 hover:bg-blue-300"
            : "hover:bg-gray-300 bg-gray-200"
        } 
      `}
        onClick={() =>
          homeModalsContext?.setIsModalOpen((prev) => ({
            ...prev,
            messenger: !prev.messenger,
          }))
        }
      >
        <AiFillMessage
          size={size}
          className={`${isOpen ? "text-blue-700" : "text-gray-900"}`}
        />
      </div>
    </>
  );
};

export default Messenger;

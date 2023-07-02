"use client";

import { useModalsContext } from "@/app/providers/ModalsProvider";
import React from "react";
import { CgMenuGridO } from "react-icons/cg";

const Menu = ({ size }: { size: number }) => {
  const homeModalsContext = useModalsContext();
  const isOpen = !!homeModalsContext?.menu.isOpen;

  return (
    <>
      <div
        className={`
         h-10 w-10 flex items-center transition-colors
        justify-center rounded-full cursor-pointer 
        ${
          isOpen
            ? "bg-blue-200 hover:bg-blue-300"
            : "hover:bg-gray-300 bg-gray-200 dark:hover:bg-zinc-500 dark:bg-zinc-600"
        } 
      `}
        onClick={() => {
          homeModalsContext?.hideOthers("menu");
          homeModalsContext?.menu.toggle();
        }}
      >
        <CgMenuGridO
          size={size}
          className={`${
            isOpen ? "text-blue-700" : "text-gray-900 dark:text-zinc-200"
          }`}
        />
      </div>
    </>
  );
};

export default Menu;

"use client";

import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";
import React, { useMemo, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";

const Menu = ({ size }: { size: number }) => {
  const homeModalsContext = useHomeModalsContext();
  const isOpen = useMemo(
    () => !!homeModalsContext?.isModalOpen?.menu,
    [homeModalsContext?.isModalOpen?.menu]
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
            menu: !prev.menu,
          }))
        }
      >
        <CgMenuGridO
          size={size}
          className={`${isOpen ? "text-blue-700" : "text-gray-900"}`}
        />
      </div>
    </>
  );
};

export default Menu;

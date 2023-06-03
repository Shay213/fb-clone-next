"use client";

import React, { useState } from "react";

import { CgMenuGridO } from "react-icons/cg";
import MenuPanel from "./MenuPanel";

const Menu = ({ size }: { size: number }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <CgMenuGridO
          size={size}
          className={`${isOpen ? "text-blue-700" : "text-gray-900"}`}
        />
      </div>
      <MenuPanel isOpen={isOpen} />
    </>
  );
};

export default Menu;

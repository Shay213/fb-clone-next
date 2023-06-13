"use client";

import React, { useMemo } from "react";

import { BsFillTelephoneFill, BsCameraVideoFill } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useIsActiveContext } from "./isActiveContextProvider";

const HeaderIcons = () => {
  const IsActiveContext = useIsActiveContext();

  const isActive = useMemo(() => {
    return !!IsActiveContext?.isActive;
  }, [IsActiveContext?.isActive]);

  return (
    <div className="flex items-center gap-1">
      <div
        className="
            flex justify-center items-center rounded-full 
            cursor-pointer hover:bg-gray-200 
            transition p-1
          "
      >
        <BsFillTelephoneFill
          size={17}
          className={`${isActive ? "fill-blue-500" : "fill-gray-500"}`}
        />
      </div>
      <div
        className="
            flex justify-center items-center rounded-full 
            cursor-pointer hover:bg-gray-200 
            transition p-1
          "
      >
        <BsCameraVideoFill
          size={17}
          className={`${isActive ? "fill-blue-500" : "fill-gray-500"}`}
        />
      </div>
      <div
        className="
            flex justify-center items-center rounded-full 
            cursor-pointer hover:bg-gray-200 
            transition p-1
          "
      >
        <AiOutlineMinus
          size={17}
          className={`${isActive ? "fill-blue-500" : "fill-gray-500"}`}
        />
      </div>
      <div
        className="
            flex justify-center items-center rounded-full 
            cursor-pointer hover:bg-gray-200 
            transition p-1
          "
      >
        <IoMdClose
          size={17}
          className={`${isActive ? "fill-blue-500" : "fill-gray-500"}`}
        />
      </div>
    </div>
  );
};

export default HeaderIcons;

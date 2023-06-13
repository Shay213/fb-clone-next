"use client";

import React, { useMemo } from "react";

import { MdSend } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { BsImages, BsStickyFill } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import Textarea from "./Textarea";
import { useIsActiveContext } from "./isActiveContextProvider";

const Bottom = () => {
  const IsActiveContext = useIsActiveContext();

  const isActive = useMemo(() => {
    return !!IsActiveContext?.isActive;
  }, [IsActiveContext?.isActive]);

  return (
    <div className="p-2 flex items-center gap-1">
      <div className="flex items-center gap-1">
        <div
          className="
          flex justify-center items-center p-1 rounded-full cursor-pointer
          hover:bg-gray-200 transition 
        "
        >
          <BiPlus
            size={17}
            className={`${isActive ? "fill-blue-500" : "fill-gray-500"}`}
          />
        </div>
        {!isActive && (
          <>
            <div
              className="
          flex justify-center items-center p-1 rounded-full cursor-pointer
          hover:bg-gray-200 transition 
        "
            >
              <BsImages size={17} className="fill-gray-500" />
            </div>
            <div
              className="
          flex justify-center items-center p-1 rounded-full cursor-pointer
          hover:bg-gray-200 transition 
        "
            >
              <BsStickyFill size={17} className="fill-gray-500" />
            </div>
            <div
              className="
          flex justify-center items-center p-1 rounded-full cursor-pointer
          hover:bg-gray-200 transition 
        "
            >
              <AiOutlineGif size={17} className="fill-gray-500" />
            </div>
          </>
        )}
      </div>
      <Textarea setIsActive={IsActiveContext?.setIsActive} />
      <div
        className="
          flex justify-center items-center p-1 rounded-full cursor-pointer
          hover:bg-gray-200 transition 
        "
      >
        <MdSend size={17} className="fill-gray-500" />
      </div>
    </div>
  );
};

export default Bottom;

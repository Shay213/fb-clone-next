"use client";

import React from "react";

import { BsFillTelephoneFill, BsCameraVideoFill } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useModalsContext } from "@/app/providers/ModalsProvider";

const HeaderIcons = () => {
  const modalsContext = useModalsContext();
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
          className="group-hover:fill-blue-500 fill-gray-500"
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
          className="group-hover:fill-blue-500 fill-gray-500"
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
          className="group-hover:fill-blue-500 fill-gray-500"
        />
      </div>
      <div
        className="
            flex justify-center items-center rounded-full 
            cursor-pointer hover:bg-gray-200 
            transition p-1
          "
        onClick={() => {
          if (modalsContext) {
            modalsContext?.conversation.hide();

            modalsContext?.conversation?.setConversation?.(null);
            modalsContext.conversation.currentConversation = null;
          }
        }}
      >
        <IoMdClose
          size={17}
          className="group-hover:fill-blue-500 fill-gray-500"
        />
      </div>
    </div>
  );
};

export default HeaderIcons;

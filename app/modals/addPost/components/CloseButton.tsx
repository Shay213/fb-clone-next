"use client";

import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";
import React from "react";

import { IoMdClose } from "react-icons/io";

const CloseButton = () => {
  const homeModalsContext = useHomeModalsContext();

  return (
    <div
      className="
      flex justify-center items-center p-2 cursor-pointer
      rounded-full bg-gray-200 hover:bg-gray-300
      dark:bg-zinc-700 dark:hover:bg-zinc-600 transition
    "
      onClick={() => homeModalsContext?.addPost.hide()}
    >
      <IoMdClose size={20} className="fill-gray-700 dark:fill-zinc-200" />
    </div>
  );
};

export default CloseButton;

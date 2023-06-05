"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";

const Button = () => {
  const { data: session } = useSession();
  const name = session?.user?.name?.split(" ")[0];
  const homeModalsContext = useHomeModalsContext();

  return (
    <button
      type="button"
      className="
        px-4 py-2 bg-gray-100 text-gray-600 rounded-full 
        flex-1 text-sm text-left hover:bg-gray-200 transition
        dark:bg-zinc-700 dark:text-zinc-300
        dark:hover:bg-zinc-600
      "
      onClick={() => {
        homeModalsContext?.hideOthers("addPost");
        homeModalsContext?.addPost.toggle();
      }}
    >{`What's on your mind, ${name}`}</button>
  );
};

export default Button;

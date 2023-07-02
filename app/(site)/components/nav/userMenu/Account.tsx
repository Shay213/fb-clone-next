"use client";

import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useModalsContext } from "@/app/providers/ModalsProvider";

const Account = () => {
  const { data: session } = useSession();
  const homeModalsContext = useModalsContext();
  const isOpen = !!homeModalsContext?.account.isOpen;
  const img = session?.user?.image;

  return (
    <div
      className={`
        h-10 w-10 flex items-center justify-center
        cursor-pointer rounded-full overflow-hidden
        ${isOpen ? "ring-2 ring-blue-500 transition" : ""}
      `}
      onClick={() => {
        homeModalsContext?.hideOthers("account");
        homeModalsContext?.account.toggle();
      }}
    >
      <Image
        src={img ? img : "/avatar.jpeg"}
        alt="profile"
        width={500}
        height={500}
        className={`
            w-full h-full object-cover hover:scale-125 transition
            ${isOpen ? "scale-125" : "scale-100"}
          `}
      />
    </div>
  );
};

export default Account;

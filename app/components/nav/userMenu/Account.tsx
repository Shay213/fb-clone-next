"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";

const Account = () => {
  const { data: session } = useSession();
  const homeModalsContext = useHomeModalsContext();
  const isOpen = useMemo(() => {
    return !!homeModalsContext?.account.isOpen;
  }, [homeModalsContext?.account.isOpen]);
  const img = useMemo(() => session?.user?.image, [session?.user?.image]);

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

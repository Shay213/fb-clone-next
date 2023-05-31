"use client";

import React from "react";

import { CgMenuGridO } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { useSession } from "next-auth/react";
import Image from "next/image";

const UserMenu = () => {
  const { data: session } = useSession();

  const img = session?.user?.image;

  return (
    <div className="h-full flex items-center gap-2">
      <div
        className="
          bg-gray-200 h-10 w-10 flex items-center 
          justify-center rounded-full cursor-pointer hover:bg-gray-300
          transition-colors
        "
      >
        <CgMenuGridO size={25} />
      </div>
      <div
        className="
          bg-gray-200 h-10 w-10 flex items-center 
          justify-center rounded-full cursor-pointer hover:bg-gray-300
          transition-colors        
        "
      >
        <AiFillMessage size={25} />
      </div>
      <div
        className="
          bg-gray-200 h-10 w-10 flex items-center 
          justify-center rounded-full cursor-pointer hover:bg-gray-300
          transition-colors
        "
      >
        <IoIosNotifications size={25} />
      </div>
      <div
        className="
          h-10 w-10 flex items-center justify-center rounded-full 
          cursor-pointer
        "
      >
        <Image
          src={img ? img : "/avatar.jpeg"}
          alt="profile"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default UserMenu;

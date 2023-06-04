"use client";

import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Account = () => {
  const { data: session } = useSession();

  const img = session?.user?.image;
  return (
    <div
      className="
        h-10 w-10 flex items-center justify-center
        cursor-pointer
      "
    >
      <Image
        src={img ? img : "/avatar.jpeg"}
        alt="profile"
        width={500}
        height={500}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
};

export default Account;

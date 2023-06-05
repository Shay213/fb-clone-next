"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Avatar = () => {
  const { data: session } = useSession();
  return (
    <Image
      src={session?.user?.image || "/avatar.jpeg"}
      alt="user"
      width={35}
      height={35}
      className="rounded-full object-cover"
    />
  );
};

export default Avatar;

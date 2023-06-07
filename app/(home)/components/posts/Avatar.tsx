"use client";

import React, { useState } from "react";
import Image from "next/image";
import UserBox from "./UserBox";

interface AvatarProps {
  img?: string | null;
  children: React.ReactNode;
}

const Avatar = ({ img, children }: AvatarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Image
        src={img || "/avatar.jpeg"}
        alt="user"
        width={35}
        height={35}
        className="object-cover rounded-full"
      />
      {isOpen && children}
    </div>
  );
};

export default Avatar;

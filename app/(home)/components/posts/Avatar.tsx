"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import UserBox from "./UserBox";

interface AvatarProps {
  img?: string | null;
}

const Avatar = ({ img }: AvatarProps) => {
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
      {isOpen && <UserBox />}
    </div>
  );
};

export default Avatar;

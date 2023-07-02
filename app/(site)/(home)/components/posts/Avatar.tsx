"use client";

import React, { useState } from "react";
import Image from "next/image";

interface AvatarProps {
  img?: string | null;
  width?: number;
  height?: number;
  children: React.ReactNode;
}

const Avatar = ({ img, width, height, children }: AvatarProps) => {
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
        width={width || 35}
        height={height || 35}
        className="object-cover rounded-full"
      />
      {isOpen && children}
    </div>
  );
};

export default Avatar;

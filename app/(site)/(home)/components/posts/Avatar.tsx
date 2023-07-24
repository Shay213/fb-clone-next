"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AvatarProps {
  img?: string | null;
  width?: number;
  height?: number;
  children: React.ReactNode;
  authorId: string;
}

const Avatar = ({ img, width, height, children, authorId }: AvatarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Link
      href={`/profile/${authorId}`}
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
    </Link>
  );
};

export default Avatar;

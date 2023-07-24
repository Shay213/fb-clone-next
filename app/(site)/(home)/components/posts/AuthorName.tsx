"use client";

import Link from "next/link";
import React, { useState } from "react";

interface AuthorNameProps {
  name: string;
  children: React.ReactNode;
  authorId: string;
}

const AuthorName = ({ name, children, authorId }: AuthorNameProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Link
      href={`/profile/${authorId}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative cursor-pointer w-max"
    >
      <span
        className="
          text-sm font-semibold dark:text-zinc-300 
          hover:underline transition 
        "
      >
        {name}
      </span>
      {isOpen && children}
    </Link>
  );
};

export default AuthorName;

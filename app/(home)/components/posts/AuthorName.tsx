"use client";

import React, { useState } from "react";

interface AuthorNameProps {
  name: string;
  children: React.ReactNode;
}

const AuthorName = ({ name, children }: AuthorNameProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative cursor-pointer"
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
    </div>
  );
};

export default AuthorName;

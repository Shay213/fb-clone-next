"use client";

import React, { useEffect, useRef, useState } from "react";
import UserBox from "./UserBox";

interface AuthorNameProps {
  name: string;
}

const AuthorName = ({ name }: AuthorNameProps) => {
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
      {isOpen && <UserBox />}
    </div>
  );
};

export default AuthorName;

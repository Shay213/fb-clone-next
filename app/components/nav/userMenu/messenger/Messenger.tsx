"use client";

import React, { useMemo } from "react";
import { AiFillMessage } from "react-icons/ai";
import { useRouter, usePathname } from "next/navigation";

const Messenger = ({ size }: { size: number }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isOpen = useMemo(() => {
    if (pathname === "/messenger") {
      return true;
    }
    return false;
  }, [pathname]);

  return (
    <>
      <div
        className={`
         h-10 w-10 flex items-center transition-colors
        justify-center rounded-full cursor-pointer 
        ${
          isOpen
            ? "bg-blue-200 hover:bg-blue-300"
            : "hover:bg-gray-300 bg-gray-200"
        } 
      `}
        onClick={() => (isOpen ? router.back() : router.push("/messenger"))}
      >
        <AiFillMessage
          size={size}
          className={`${isOpen ? "text-blue-700" : "text-gray-900"}`}
        />
      </div>
    </>
  );
};

export default Messenger;

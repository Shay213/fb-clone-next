"use client";

import React, { useEffect, useRef, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Search from "./Search";

const SearchPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchPanelRef = useRef<null | HTMLDivElement>(null);
  const searchRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchRef.current !== e.target &&
        !searchRef.current?.contains(e.target as Node) &&
        searchPanelRef.current !== e.target &&
        !searchPanelRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <>
      <div
        className={`
            absolute top-0 left-0 bg-white z-10 w-[330px]
            min-h-[100px] shadow-lg transition-all
            ${
              isOpen
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-12 scale-75"
            }
          `}
        ref={searchPanelRef}
      >
        <div className="pt-3 pl-4">
          <div
            className="
                flex items-center justify-center w-8 h-8 
                rounded-full hover:bg-gray-200 transition-colors
                cursor-pointer
              "
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <HiArrowNarrowLeft size={23} className="fill-gray-600" />
          </div>
        </div>
        <div className="pt-4">Search</div>
      </div>
      <Search isOpen={isOpen} setIsOpen={setIsOpen} ref={searchRef} />
    </>
  );
};

export default SearchPanel;

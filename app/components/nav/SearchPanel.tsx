"use client";

import React, { useEffect, useRef, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { SlMagnifier } from "react-icons/sl";
import Search from "./Search";
import Image from "next/image";

const SearchPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchPanelRef = useRef<null | HTMLDivElement>(null);
  const searchRef = useRef<null | HTMLDivElement>(null);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchRef.current !== e.target &&
        !searchRef.current?.contains(e.target as Node) &&
        searchPanelRef.current !== e.target &&
        !searchPanelRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSearchPhrase("");
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
            absolute top-0 left-0 bg-white dark:bg-zinc-800 w-[330px]
            shadow-lg transition-all z-50
            ${
              isOpen
                ? "opacity-100 translate-x-0 scale-100 min-h-[100px]"
                : "opacity-0 translate-x-12 scale-75 h-14"
            }
          `}
        ref={searchPanelRef}
      >
        <div className="pt-3 pl-4">
          <div
            className="
                flex items-center justify-center w-8 h-8 
                rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700
                transition-colors cursor-pointer
              "
            onClick={() => {
              setSearchPhrase("");
              setIsOpen((prev) => !prev);
            }}
          >
            <HiArrowNarrowLeft
              size={23}
              className="fill-gray-600 dark:fill-zinc-300"
            />
          </div>
        </div>
        <div className="p-4 flex flex-col gap-1">
          {isLoading ? (
            <div className=" dark:text-zinc-200 text-center">Loading...</div>
          ) : searchPhrase.length > 0 ? (
            <>
              {results.map((r) => (
                <div
                  key={r.id}
                  className="flex gap-2 p-1 items-start rounded-md hover:bg-gray-200 transition cursor-pointer"
                >
                  <Image
                    src={"/avatar.jpeg"}
                    alt="user-img"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h5 className="text-base font-semibold">{`${r.firstName} ${r.lastName}`}</h5>
                    <span className="text-sm font-light">Friend</span>
                  </div>
                </div>
              ))}
              <div className="flex gap-2 p-1 items-center rounded-md hover:bg-gray-200 transition cursor-pointer">
                <div
                  className="
                    flex justify-center items-center rounded-full bg-blue-500 
                    transition w-[40px] h-[40px]
                  "
                >
                  <SlMagnifier size={20} className="fill-white font-bold" />
                </div>
                <div className="text-blue-500">
                  Search for{" "}
                  <span className="text-blue-700">{searchPhrase}</span>
                </div>
              </div>
            </>
          ) : (
            <div className=" dark:text-zinc-200 text-center">
              No recent searches
            </div>
          )}
        </div>
      </div>
      <Search
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        ref={searchRef}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        setResults={setResults}
        setIsLoading={setIsLoading}
        setError={setError}
      />
    </>
  );
};

export default SearchPanel;

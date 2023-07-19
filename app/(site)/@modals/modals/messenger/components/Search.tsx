import React from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

const Search = () => {
  const isSearching = false;
  return (
    <div className="flex items-center gap-2">
      {isSearching && (
        <div
          className="
            flex justify-center items-center p-2 rounded-full 
            cursor-pointer hover:bg-gray-200
            transition
          "
        >
          <BsArrowLeft size={17} className="fill-gray-700" />
        </div>
      )}
      <div className="flex-1 flex items-center bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden">
        {!isSearching && (
          <label
            htmlFor="search-messenger"
            className="pl-2 text-gray-500 dark:text-zinc-400"
          >
            <AiOutlineSearch size={20} />
          </label>
        )}
        <input
          id="search-messenger"
          type="text"
          placeholder="Search messenger"
          className="
            bg-gray-200 dark:bg-zinc-700 p-2 placeholder:text-gray-500 
            outline-none border-none text-sm placeholder:text-sm
            dark:placeholder:text-zinc-400 dark:text-zinc-100
          "
        />
      </div>
    </div>
  );
};

export default Search;

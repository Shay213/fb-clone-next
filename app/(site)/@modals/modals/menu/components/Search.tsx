import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="flex items-center bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden mb-4">
      <label
        htmlFor="search-a1"
        className="pl-2 text-gray-500 dark:text-zinc-400"
      >
        <AiOutlineSearch size={20} />
      </label>
      <input
        id="search-a1"
        type="text"
        placeholder="Search menu"
        className="
            bg-gray-200 dark:bg-zinc-700 p-2 placeholder:text-gray-500 
            outline-none border-none text-sm placeholder:text-sm
            dark:placeholder:text-zinc-400 dark:text-zinc-100
          "
      />
    </div>
  );
};

export default Search;

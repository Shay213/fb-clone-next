import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="flex items-center bg-gray-200 rounded-full overflow-hidden">
      <label htmlFor="search-messenger" className="pl-2 text-gray-500">
        <AiOutlineSearch size={20} />
      </label>
      <input
        id="search-messenger"
        type="text"
        placeholder="Search messenger"
        className="
            bg-gray-200 p-2 placeholder:text-gray-500 
            outline-none border-none text-sm placeholder:text-sm
          "
      />
    </div>
  );
};

export default Search;

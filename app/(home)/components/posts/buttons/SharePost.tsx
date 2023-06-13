import React from "react";

import { BiShare } from "react-icons/bi";

const SharePost = () => {
  return (
    <div
      className="flex items-center justify-center rounded-md flex-1
            hover:bg-gray-200 transition cursor-pointer
            dark:hover:bg-zinc-700
            "
    >
      <div className="flex items-center gap-2 py-2 dark:text-zinc-300">
        <BiShare size={20} /> Share
      </div>
    </div>
  );
};

export default SharePost;

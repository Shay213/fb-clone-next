import React from "react";

import { BiComment } from "react-icons/bi";

interface ShowAddCommentProps {
  setIsAddCommentOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowAddComment = ({ setIsAddCommentOpen }: ShowAddCommentProps) => {
  return (
    <div
      className="flex items-center justify-center rounded-md flex-1
            hover:bg-gray-200 transition cursor-pointer
            dark:hover:bg-zinc-700
            "
      onClick={() => setIsAddCommentOpen((prev) => !prev)}
    >
      <div className="flex items-center gap-2 py-2 dark:text-zinc-300">
        <BiComment size={20} /> Comment
      </div>
    </div>
  );
};

export default ShowAddComment;

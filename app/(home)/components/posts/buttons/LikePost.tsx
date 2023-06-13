"use client";

import toggleLike from "@/app/actions/likes/toggleLike";
import React, { useCallback, useState } from "react";

import { BiLike } from "react-icons/bi";

interface LikePostProps {
  userEmail: string;
  postId: string;
}

const LikePost = ({ postId, userEmail }: LikePostProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = useCallback(() => {
    toggleLike(userEmail, postId)
      .then(() => {
        setIsLiked((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userEmail, postId]);

  return (
    <div
      className={`flex items-center justify-center rounded-md flex-1
            hover:bg-gray-200 transition cursor-pointer
              dark:hover:bg-zinc-700
            `}
      onClick={handleClick}
    >
      <div className="flex items-center gap-2 py-2 dark:text-zinc-300">
        <BiLike size={20} className={`${isLiked ? "fill-blue-500" : ""}`} />
        <span className={`${isLiked ? "text-blue-500" : ""}`}>
          {isLiked ? "Liked" : "Like"}
        </span>
      </div>
    </div>
  );
};

export default LikePost;

import React from "react";
import Heading from "./Heading";
import Image from "next/image";

import { AiFillLike } from "react-icons/ai";
import { BiLike, BiDislike, BiComment, BiShare } from "react-icons/bi";

interface PostProps {
  post: {
    id: number;
    img: string;
    name: string;
    postedAt: string;
    whoCanSeeIt: string;
    description: string;
    postImg: string;
    likes: number;
    comments: number;
    shares: number;
  };
}

const Post = ({ post }: PostProps) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-md shadow-lg py-2">
      <div className="px-6">
        <Heading
          name={post.name}
          postedAt={post.postedAt}
          whoCanSeeIt={post.whoCanSeeIt}
          img={post.img}
        />
        <div className="py-3 text-sm dark:text-zinc-300">
          {post.description}
        </div>
      </div>
      {post.postImg && (
        <Image
          src={post.postImg}
          alt="postImage"
          width={600}
          height={900}
          className="w-full object-cover max-h-[450px]"
        />
      )}
      <div className="px-6">
        <div className="py-4 flex justify-between text-sm text-gray-600 dark:text-zinc-300">
          <div className="flex items-center gap-2">
            <AiFillLike size={20} className="fill-blue-500" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center gap-2">
            <div>{`${post.comments} comments`}</div>
            <div>{`${post.shares} shares`}</div>
          </div>
        </div>
        <div
          className="
            py-1 border-y-[1px] border-gray-300
            flex items-center gap-2 dark:border-zinc-600
          "
        >
          <div
            className="flex items-center justify-center rounded-md flex-1
            hover:bg-gray-200 transition cursor-pointer
              dark:hover:bg-zinc-700
            "
          >
            <div className="flex items-center gap-2 py-4 dark:text-zinc-300">
              <BiLike size={20} /> Like
            </div>
          </div>
          <div
            className="flex items-center justify-center rounded-md flex-1
            hover:bg-gray-200 transition cursor-pointer
            dark:hover:bg-zinc-700
            "
          >
            <div className="flex items-center gap-2 py-4 dark:text-zinc-300">
              <BiComment size={20} /> Comment
            </div>
          </div>
          <div
            className="flex items-center justify-center rounded-md flex-1
            hover:bg-gray-200 transition cursor-pointer
            dark:hover:bg-zinc-700
            "
          >
            <div className="flex items-center gap-2 py-4 dark:text-zinc-300">
              <BiShare size={20} /> Share
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

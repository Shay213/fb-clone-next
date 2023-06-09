import React from "react";
import Avatar from "./Avatar";
import UserBox from "./UserBox";
import AuthorName from "./AuthorName";

import { AiFillLike } from "react-icons/ai";

interface CommentProps {
  comment: {
    id: string;
    postedBy: {
      userImg: null;
      id: string;
      firstName: string;
      lastName: string;
      email: string;
    };
    description: string;
    likes: number;
    createdAt: string;
  };
}

const Comment = ({ comment }: CommentProps) => {
  const { id, description, likes, postedBy, createdAt } = comment;
  return (
    <div className="flex gap-1 items-start">
      <div className="h-full">
        <Avatar img={postedBy.userImg} width={30} height={30}>
          {/* @ts-ignore */}
          <UserBox user={postedBy} />
        </Avatar>
        <div className="h-full w-1 bg-gray-100">{` `}</div>
      </div>
      <div className="flex flex-col relative">
        <div className="bg-gray-100 rounded-md px-2 pb-2 pt-1 w-max">
          <AuthorName name={`${postedBy.firstName} ${postedBy.lastName}`}>
            {/* @ts-ignore */}
            <UserBox user={postedBy} />
          </AuthorName>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex items-center gap-3 text-xs px-2">
          <button type="button" className="hover:underline transition">
            Like
          </button>
          <button type="button" className="hover:underline transition">
            Reply
          </button>
          <button type="button" className="hover:underline transition">
            Share
          </button>
          <span className="text-gray-700">{createdAt}</span>
        </div>
        <div
          className="
            absolute left-full bottom-4 flex p-[2px] items-center gap-1 
            text-sm text-gray-700 bg-white rounded-md border-[1px]
            border-gray-200
          "
        >
          <div className="flex justify-center items-center p-[2px] rounded-full bg-blue-500">
            <AiFillLike size={13} className="fill-white" />
          </div>
          {likes}
        </div>
      </div>
    </div>
  );
};

export default Comment;

import React from "react";
import Avatar from "./Avatar";
import UserBox from "./UserBox";
import AuthorName from "./AuthorName";

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
      <Avatar img={postedBy.userImg} width={30} height={30}>
        {/* @ts-ignore */}
        <UserBox user={postedBy} />
      </Avatar>
      <div className="flex flex-col">
        <div className="bg-gray-100 rounded-md p-2 w-max">
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
      </div>
    </div>
  );
};

export default Comment;

import React from "react";
import Avatar from "./Avatar";
import UserBox from "./UserBox";
import AuthorName from "./AuthorName";
import moment from "moment";

import { AiFillLike } from "react-icons/ai";

import { ExtendedComment } from "@/app/actions/getPostComments";

interface CommentProps {
  comment: ExtendedComment;
  userId: string;
}

const Comment = ({ comment, userId }: CommentProps) => {
  const {
    createdAt,
    description,
    id,
    likedByIDs,
    postId,
    postedBy,
    postedByID,
    rootCommentID,
  } = comment;
  return (
    <div className="flex gap-1 items-start">
      <Avatar
        img={postedBy.picture}
        width={30}
        height={30}
        authorId={postedByID}
        className="basis-[30px] flex-shrink-0"
      >
        <UserBox
          authorId={postedByID}
          currUserId={userId}
          name={`${postedBy.firstName} ${postedBy.lastName}`}
          img={postedBy.picture}
        />
      </Avatar>
      <div className="w-max flex flex-col">
        <div className="bg-gray-100 rounded-md px-2 pb-2 pt-1 break-words relative">
          <AuthorName
            name={`${postedBy.firstName} ${postedBy.lastName}`}
            authorId={postedByID}
          >
            <UserBox
              authorId={postedByID}
              currUserId={userId}
              name={`${postedBy.firstName} ${postedBy.lastName}`}
              img={postedBy.picture}
            />
          </AuthorName>
          <p className="text-sm">{description}</p>
          <div
            className="
            absolute bottom-0 right-0 flex p-[2px] items-center gap-1 
            text-sm text-gray-700 bg-white rounded-md border-[1px]
            border-gray-200
          "
          >
            <div className="flex justify-center items-center p-[2px] rounded-full bg-blue-500">
              <AiFillLike size={13} className="fill-white" />
            </div>
            {likedByIDs.length}
          </div>
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
          <span className="text-gray-700">{moment(createdAt).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;

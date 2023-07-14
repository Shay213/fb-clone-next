import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import moment from "moment";
import { Post as IPost } from "@prisma/client";

import { AiFillLike } from "react-icons/ai";

import LikePost from "./buttons/LikePost";
import ShowAddComment from "./buttons/ShowAddComment";
import SharePost from "./buttons/SharePost";
import Comments from "./Comments";
import AddCommentContextProvider from "./AddCommentContextProvider";
import AddComment from "./AddComment";

enum AUDIENCE {
  PUBLIC = "public",
  FRIENDS = "friends",
  ONLY_ME = "only me",
}

const Post = ({
  post,
  userId,
}: {
  post: IPost & {
    author: {
      id: string;
      firstName: string;
      lastName: string;
      picture: string | null;
    };
  };
  userId: string;
}) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-md shadow-lg py-2">
      <div className="px-6">
        <Heading
          name={`${post.author.firstName} ${post.author.lastName}`}
          postedAt={moment(post.createdAt).fromNow()}
          whoCanSeeIt={AUDIENCE[post.audience as keyof typeof AUDIENCE]}
          img={post.author.picture}
          authorId={post.author.id}
          currUserId={userId}
        />
        <div className="py-3 text-sm dark:text-zinc-300">
          {post.description}
        </div>
      </div>
      {post.img && (
        <Image
          src={post.img}
          alt="postImage"
          width={600}
          height={900}
          className="w-full object-cover max-h-[450px]"
        />
      )}
      <div className="px-6 flex flex-col gap-2">
        <div className="py-4 flex justify-between text-sm text-gray-600 dark:text-zinc-300">
          <div className="flex items-center gap-2">
            <AiFillLike size={20} className="fill-blue-500" />
            <span>2</span>
          </div>
          <div className="flex items-center gap-2">
            <div>{`60 comments`}</div>
            <div>{`20 shares`}</div>
          </div>
        </div>
        <AddCommentContextProvider>
          <div
            className="
            py-1 border-y-[1px] border-gray-300
            flex items-center gap-2 dark:border-zinc-600
          "
          >
            <LikePost userEmail={""} postId={""} />
            <ShowAddComment />
            <SharePost />
          </div>
          <AddComment />
        </AddCommentContextProvider>
        <Comments />
      </div>
    </div>
  );
};

export default Post;

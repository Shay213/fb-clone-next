import React, { useState } from "react";
import Heading from "./Heading";
import Image from "next/image";
import moment from "moment";
import { Post as IPost } from "@prisma/client";

import { AiFillLike } from "react-icons/ai";

import LikePost from "./buttons/LikePost";
import ShowAddComment from "./buttons/ShowAddComment";
import SharePost from "./buttons/SharePost";
import Comments from "./Comments";
import AddComment from "./AddComment";
import likePost from "@/app/actions/likePost";
import { ExtendedPost } from "@/app/actions/getPosts";

enum AUDIENCE {
  PUBLIC = "public",
  FRIENDS = "friends",
  ONLY_ME = "only me",
}

interface PostProps {
  post: ExtendedPost;
  userId: string;
}

const Post = ({ post, userId }: PostProps) => {
  const [isAddCommentOpen, setIsAddCommentOpen] = useState(false);

  const handleClick = async () => {
    try {
      await likePost({ postId: post.id, userId });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(post);
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
            <span>{post.likedByIDs.length}</span>
          </div>
          <div className="flex items-center gap-2">
            <div>{`60 comments`}</div>
            <div>{`20 shares`}</div>
          </div>
        </div>
        <div
          className="
            py-1 border-y-[1px] border-gray-300
            flex items-center gap-2 dark:border-zinc-600
          "
        >
          <LikePost
            userId={userId}
            likedByIds={post.likedByIDs}
            handleClick={handleClick}
          />
          <ShowAddComment setIsAddCommentOpen={setIsAddCommentOpen} />
          <SharePost />
        </div>
        {isAddCommentOpen && (
          <AddComment
            isAddCommentOpen={isAddCommentOpen}
            setIsAddCommentOpen={setIsAddCommentOpen}
            postId={post.id}
            userId={userId}
          />
        )}
        <Comments initialComments={post.comments} postId={post.id} />
      </div>
    </div>
  );
};

export default Post;

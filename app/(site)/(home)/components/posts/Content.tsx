"use client";
import React, { useEffect, useState } from "react";

import Post from "./Post";
import { Post as IPost } from "@prisma/client";
import { pusherClient } from "@/lib/pusher";

type ExtendedPost = IPost & {
  author: {
    id: string;
    firstName: string;
    lastName: string;
    picture: string | null;
  };
};

const Content = ({
  initialPosts,
  userId,
}: {
  initialPosts: ExtendedPost[];
  userId: string;
}) => {
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    const newPost = (post: ExtendedPost) => {
      setPosts((prev) => [post, ...prev]);
    };
    const filterPosts = (authorId: string) => {
      setPosts((prev) => prev.filter((post) => post.authorId !== authorId));
    };
    const replacePosts = (posts: ExtendedPost[]) => {
      setPosts(posts);
    };
    const postLiked = ({
      postId,
      likedById,
    }: {
      postId: string;
      likedById: string;
    }) => {
      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId
            ? { ...post, likedByIDs: [...post.likedByIDs, likedById] }
            : post
        )
      );
    };
    const postDisliked = ({
      postId,
      dislikedById,
    }: {
      postId: string;
      dislikedById: string;
    }) => {
      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId
            ? {
                ...post,
                likedByIDs: post.likedByIDs.filter((id) => id !== dislikedById),
              }
            : post
        )
      );
    };

    pusherClient.subscribe(`feed-${userId}`);
    pusherClient.bind("update-feed", newPost);
    pusherClient.bind("update-feed-removed-friend", filterPosts);
    pusherClient.bind("update-feed-added-friend", replacePosts);
    pusherClient.bind("update-feed-post-liked", postLiked);
    pusherClient.bind("update-feed-post-disliked", postDisliked);

    return () => {
      pusherClient.unsubscribe(`feed-${userId}`);
      pusherClient.unbind("update-feed", newPost);
      pusherClient.unbind("update-feed-removed-friend", filterPosts);
      pusherClient.unbind("update-feed-added-friend", replacePosts);
      pusherClient.unbind("update-feed-post-liked", postLiked);
      pusherClient.unbind("update-feed-post-disliked", postDisliked);
    };
  }, [userId]);

  return (
    <div className="my-4 flex flex-col gap-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} userId={userId} />
      ))}
    </div>
  );
};

export default Content;

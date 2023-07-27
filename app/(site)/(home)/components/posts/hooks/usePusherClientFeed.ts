import { ExtendedComment } from "@/app/actions/getPostComments";
import { ExtendedPost } from "@/app/actions/getPosts";
import { pusherClient } from "@/lib/pusher";
import { useEffect } from "react";

interface usePusherClientFeedArgs {
  posts: ExtendedPost[];
  setPosts: React.Dispatch<React.SetStateAction<ExtendedPost[]>>;
  userId: string;
}

const usePusherClientFeed = ({
  posts,
  setPosts,
  userId,
}: usePusherClientFeedArgs) => {
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
    const newPostComment = ({
      c,
      postId,
    }: {
      c: ExtendedComment;
      postId: string;
    }) => {
      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId
            ? { ...post, comments: [c, ...post.comments] }
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
    pusherClient.bind("update-feed-new-post-comment", newPostComment);

    return () => {
      pusherClient.unsubscribe(`feed-${userId}`);
      pusherClient.unbind("update-feed", newPost);
      pusherClient.unbind("update-feed-removed-friend", filterPosts);
      pusherClient.unbind("update-feed-added-friend", replacePosts);
      pusherClient.unbind("update-feed-post-liked", postLiked);
      pusherClient.unbind("update-feed-post-disliked", postDisliked);
      pusherClient.unbind("update-feed-new-post-comment", newPostComment);
    };
  }, [setPosts, userId]);
};

export default usePusherClientFeed;

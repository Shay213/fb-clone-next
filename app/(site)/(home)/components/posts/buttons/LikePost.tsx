import { BiLike } from "react-icons/bi";

interface LikePostProps {
  userId: string;
  likedByIds: string[];
  handleClick: () => void;
}

const LikePost = ({ userId, likedByIds, handleClick }: LikePostProps) => {
  const hasUserLikedPost = likedByIds.find((id) => id === userId);

  return (
    <div
      className={`flex items-center justify-center rounded-md flex-1
            hover:bg-gray-200 transition cursor-pointer
              dark:hover:bg-zinc-700
            `}
      onClick={handleClick}
    >
      <div className="flex items-center gap-2 py-2 dark:text-zinc-300">
        <BiLike
          size={20}
          className={`${hasUserLikedPost ? "fill-blue-500" : ""}`}
        />
        <span className={`${hasUserLikedPost ? "text-blue-500" : ""}`}>
          {hasUserLikedPost ? "Liked" : "Like"}
        </span>
      </div>
    </div>
  );
};

export default LikePost;

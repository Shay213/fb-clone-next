import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import getPostComments, {
  ExtendedComment,
} from "@/app/actions/getPostComments";
import { TailSpin } from "react-loader-spinner";
import { useMutation } from "@tanstack/react-query";
import moment from "moment";

interface CommentsProps {
  initialComments: ExtendedComment[];
  postId: string;
}

const NUM_OF_COMMENTS_TO_FETCH = 5;

const Comments = ({ initialComments, postId }: CommentsProps) => {
  const [comments, setComments] = useState<ExtendedComment[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setComments((prev) => {
      // remove duplicates
      const commentsSet = new Set([...initialComments, ...prev]);
      const commentsArray = Array.from(commentsSet);
      return commentsArray.sort((a, b) =>
        moment(b.createdAt).diff(moment(a.createdAt))
      );
    });
  }, [initialComments]);

  const mutation = useMutation({
    mutationFn: () =>
      getPostComments(
        comments.map((c) => c.id),
        postId
      ),
    onSuccess: (data) => {
      setShowMore(true);
      setComments((prev) =>
        [...prev, ...data].sort((a, b) =>
          moment(b.createdAt).diff(moment(a.createdAt))
        )
      );
    },
    onError: () => setIsError(true),
    onSettled: () => setIsLoading(false),
  });

  const handleClick = () => {
    setIsLoading(true);
    mutation.mutate();
  };

  return (
    <div className="flex flex-col gap-2">
      {showMore
        ? comments?.map((c) => <Comment key={c.id} {...c} />)
        : comments.length > 0 && (
            <Comment key={comments[0].id} {...comments[0]} />
          )}
      {!isLoading && initialComments.length > 1 && (
        <p
          className="text-gray-800 font-semibold hover:underline transition cursor-pointer"
          onClick={handleClick}
        >
          View more comments
        </p>
      )}
      {isError ? (
        <div className="text-center">Could not load comments</div>
      ) : isLoading ? (
        <TailSpin color="rgb(59 130 246)" width={30} height={30} />
      ) : null}
    </div>
  );
};

export default Comments;

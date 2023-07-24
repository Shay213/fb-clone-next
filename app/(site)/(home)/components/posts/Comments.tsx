import React, { useState } from "react";
import Comment from "./Comment";
import { ExtendedComment } from "@/app/actions/getPostComments";
import { TailSpin } from "react-loader-spinner";

interface CommentsProps {
  isError: boolean;
  isLoading: boolean;
  initialComments: ExtendedComment[];
}

const Comments = ({ initialComments, isError, isLoading }: CommentsProps) => {
  const [comments, setComments] = useState(initialComments);
  return (
    <div className="flex flex-col gap-2">
      {isError ? (
        <div className="text-center">Could not load any comments</div>
      ) : isLoading ? (
        <TailSpin color="rgb(59 130 246)" width={30} height={30} />
      ) : (
        comments.map((c) => <Comment key={c.id} {...c} />)
      )}
    </div>
  );
};

export default Comments;

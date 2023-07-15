import React from "react";
import Comment from "./Comment";

const COMMENTS = [
  {
    id: "i5juifsui",
    postedBy: {
      userImg: null,
      id: "dsa5t43",
      firstName: "John",
      lastName: "Doe",
      email: "test@gmail.com",
    },
    description: "desc desc desc desc",
    likes: 13,
    createdAt: "9h",
  },
];

const Comments = () => {
  return (
    <div className="flex flex-col gap-2">
      {[].map((c) => (
        <Comment key={""} comment={c} />
      ))}
    </div>
  );
};

export default Comments;

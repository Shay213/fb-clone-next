"use client";

import React, { useMemo } from "react";

interface MessageProps {
  type: "FRIEND_REQUEST";
  name: string;
}

const Message = ({ type, name }: MessageProps) => {
  const message = useMemo(() => {
    if (type === "FRIEND_REQUEST") {
      return (
        <p className="dark:text-zinc-200">
          <span className="font-bold">{`${name} `}</span>sended you friend
          request.
        </p>
      );
    }
    return null;
  }, [type, name]);

  return message;
};

export default Message;

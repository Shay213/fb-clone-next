"use client";

import React, { useMemo } from "react";
import { NotificationType } from "@prisma/client";

interface MessageProps {
  type: NotificationType;
  name: string;
}

const Message = ({ type, name }: MessageProps) => {
  const message = useMemo(() => {
    switch (type) {
      case "FRIEND_REQUEST":
        return (
          <p className="dark:text-zinc-200">
            <span className="font-bold">{`${name} `}</span>sended you friend
            request.
          </p>
        );
      case "REMOVED_FROM_FRIENDS":
        return (
          <p className="dark:text-zinc-200">
            <span className="font-bold">{`${name} `}</span> removed you from
            friends.
          </p>
        );
      case "FRIEND_NEW_POST":
        return (
          <p className="dark:text-zinc-200">
            <span className="font-bold">{`${name} `}</span> added new post.
          </p>
        );
      case "FRIEND_REQUEST_ACCEPTED":
        return (
          <p className="dark:text-zinc-200">
            <span className="font-bold">{`${name} `}</span> accepted your friend
            request.
          </p>
        );
      case "FRIEND_REQUEST_DECLINDED":
        return (
          <p className="dark:text-zinc-200">
            <span className="font-bold">{`${name} `}</span> declined your friend
            request.
          </p>
        );
      default:
        return null;
    }
  }, [type, name]);

  return message;
};

export default Message;

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
      case "REMOVED_FRIEND":
        return (
          <p className="dark:text-zinc-200">
            <span className="font-bold">{`${name} `}</span> removed you from
            friends.
          </p>
        );
      default:
        return null;
    }
  }, [type, name]);

  return message;
};

export default Message;

import React from "react";
import Image from "next/image";
import { Message, User } from "@prisma/client";

interface MessageProps {
  message: Message;
  userId?: string;
  friend?: User;
}

const Message = ({ message, userId, friend }: MessageProps) => {
  const ownMessage = message.sendedByID === userId;
  return (
    <>
      {ownMessage ? (
        <div className="self-end w-max max-w-full p-2 rounded-lg bg-blue-500 text-sm text-white">
          {message.description}
        </div>
      ) : (
        <div className="self-start w-max max-w-full flex items-end gap-1">
          <Image
            src={friend?.picture || "/avatar.jpeg"}
            alt="friend-img"
            width={25}
            height={25}
          />
          <div className="p-2 rounded-lg bg-gray-200 text-sm">
            {message.description}
          </div>
        </div>
      )}
    </>
  );
};

export default Message;

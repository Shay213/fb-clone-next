import React from "react";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface MessageProps {
  message: {
    id: string;
    description: string;
    createdAt: Date;
    sendedBy: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
    };
  };
}

const Message = async ({ message }: MessageProps) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }

  return (
    <>
      {session.user.email === message.sendedBy.email ? (
        <div className="self-end w-max max-w-full p-2 rounded-lg bg-blue-500 text-sm text-white">
          {message.description}
        </div>
      ) : (
        <div className="self-start w-max max-w-full flex items-end gap-1">
          <Image src="/avatar.jpeg" alt="friend-img" width={25} height={25} />
          <div className="p-2 rounded-lg bg-gray-200 text-sm">
            {message.description}
          </div>
        </div>
      )}
    </>
  );
};

export default Message;

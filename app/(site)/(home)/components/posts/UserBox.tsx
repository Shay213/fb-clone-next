import React from "react";
import Image from "next/image";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import AddFriend from "./buttons/AddFriend";
import AddToStory from "./buttons/AddToStory";
import EditProfile from "./buttons/EditProfile";
import RemoveFriend from "./buttons/RemoveFriend";
import alreadyFriends from "@/app/actions/alreadyFriends";
import getMutualFriends from "@/app/actions/getMutualFriends";
import { useQuery } from "@tanstack/react-query";

interface UserBoxProps {
  authorId: string;
  name: string;
  img?: string | null;
  currUserId: string;
}

const UserBox = ({ authorId, name, img, currUserId }: UserBoxProps) => {
  const { data: isFriend } = useQuery({
    queryKey: [`userBox-${authorId}-${currUserId}`],
    queryFn: () => alreadyFriends(currUserId, authorId),
  });
  const { data: mutualFriends } = useQuery({
    queryKey: [`mutualFriends-${authorId}-${currUserId}`],
    queryFn: () => getMutualFriends(currUserId, authorId),
  });

  return (
    <div
      className="
        absolute top-full left-0 flex flex-col gap-6 min-w-[250px] p-2 
        rounded-md shadow-md z-50 bg-slate-50 cursor-default  
        dark:bg-zinc-700
      "
    >
      <div className="flex gap-4">
        <div>
          <Image
            src={img || "/avatar.jpeg"}
            alt="user-img"
            width={70}
            height={70}
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h1 className="text-gray-800 text-xl font-semibold dark:text-zinc-200">
            {name}
          </h1>
          {authorId !== currUserId &&
            mutualFriends &&
            mutualFriends.map((friend) => (
              <p key={friend.id} className="dark:text-zinc-300">
                {`${friend.firstName} ${friend.lastName}`}
              </p>
            ))}
        </div>
      </div>
      <div className="flex justify-between gap-2">
        {authorId === currUserId ? (
          <>
            <AddToStory /> <EditProfile />
          </>
        ) : isFriend ? (
          <>
            <RemoveFriend friendId={authorId} userId={currUserId} />
            <button
              type="button"
              className="
              flex gap-2 justify-center items-center w-max px-6 py-2 font-normal
              bg-blue-500 rounded-md text-white hover:bg-blue-600 transition
              dark:bg-blue-600 dark:hover:bg-blue-500
            "
            >
              <BsMessenger size={18} />
              Message
            </button>
          </>
        ) : (
          <>
            <AddFriend friendId={authorId} />
            <button
              type="button"
              className="
              flex gap-2 justify-center items-center w-max px-6 py-2 font-normal
              bg-gray-200 rounded-md text-gray-800 hover:bg-gray-300 transition
              dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:text-zinc-200
            "
            >
              <BsMessenger size={18} />
              Message
            </button>
          </>
        )}
        <button
          type="button"
          className="
              flex gap-2 justify-center items-center w-max px-2 py-2 font-normal
              bg-gray-200 rounded-md text-gray-800 hover:bg-gray-300 transition
              dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:text-zinc-200
            "
        >
          <BiDotsHorizontalRounded size={21} />
        </button>
      </div>
    </div>
  );
};

export default UserBox;

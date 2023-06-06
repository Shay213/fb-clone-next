import React from "react";
import Image from "next/image";

import {
  BiUserPlus,
  BiUserCheck,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";

const FAKE_USER = {
  id: 1,
  img: null,
  name: "fake user",
  mutualFriends: ["fake user2"],
  isActive: true,
  newStory: true,
  alreadyFriends: true,
};

const UserBox = () => {
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
            src={FAKE_USER.img || "/avatar.jpeg"}
            alt="user-img"
            width={70}
            height={70}
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h1 className="text-gray-800 text-xl font-semibold dark:text-zinc-200">
            {FAKE_USER.name}
          </h1>
          {FAKE_USER.mutualFriends.map((friend) => (
            <p key={friend} className="dark:text-zinc-300">
              {friend}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-between gap-2">
        {FAKE_USER.alreadyFriends ? (
          <>
            <button
              type="button"
              className="
              flex gap-2 justify-center items-center w-max 
              px-6 py-2 bg-gray-200 rounded-md text-gray-800
              hover:bg-gray-300 transition font-normal
              dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:text-zinc-200
            "
            >
              <BiUserCheck size={21} />
              Friends
            </button>
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
            <button
              type="button"
              className="
              flex gap-2 justify-center items-center w-max 
              px-6 py-2 bg-blue-500 rounded-md text-white
              hover:bg-blue-600 transition font-normal
              dark:bg-blue-600 dark:hover:bg-blue-500
            "
            >
              <BiUserPlus size={21} />
              Add Friend
            </button>
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

export default React.forwardRef(UserBox);

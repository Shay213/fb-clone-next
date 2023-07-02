import Image from "next/image";
import React from "react";

const Profiles = () => {
  return (
    <div
      className="
        flex flex-col p-2 rounded-md shadow-md min-w-[240px]
        bg-gray-100 dark:bg-zinc-700 
      "
    >
      <div
        className="
          flex items-center gap-3 p-2 transition
          hover:bg-gray-200 cursor-pointer
          dark:hover:bg-zinc-600 rounded-md
        "
      >
        <Image
          src="/avatar.jpeg"
          alt="profile-img"
          width={35}
          height={35}
          className="rounded-full object-cover"
        />
        <h2 className="text-lg dark:text-zinc-300">Test User</h2>
      </div>
      <hr className="border-gray-300 dark:border-zinc-600 my-2" />
      <div
        className="
          p-1 text-blue-500 cursor-pointer
          hover:bg-gray-200 rounded-md
          dark:hover:bg-zinc-600
        "
      >
        See all profiles
      </div>
    </div>
  );
};

export default Profiles;

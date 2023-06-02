"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

import { AiFillVideoCamera } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { CiFaceSmile } from "react-icons/ci";

const AddPost = () => {
  const { data: session } = useSession();
  const name = session?.user?.name?.split(" ")[0];

  return (
    <div className="mt-4 bg-white rounded-md shadow-lg py-2 px-6">
      <div className="flex items-center gap-3">
        <Image
          src={session?.user?.image || "/avatar.jpeg"}
          alt="user"
          width={35}
          height={35}
        />
        <button
          type="button"
          className="
              px-4 py-2 bg-gray-100 text-gray-600 rounded-full 
              flex-1 text-sm text-left hover:bg-gray-200 transition
            "
        >{`What's on your mind, ${name}`}</button>
      </div>
      <hr className="my-2" />
      <div className="flex">
        <div
          className="
            flex items-center justify-center gap-2 flex-1 py-2
            hover:bg-gray-200 transition cursor-pointer rounded-md
          "
        >
          <AiFillVideoCamera className="fill-red-500" size={25} />
          <span className="text-gray-600 text-sm">Live video</span>
        </div>
        <div
          className="
            flex items-center justify-center gap-2 flex-1 py-2
            hover:bg-gray-200 transition cursor-pointer rounded-md
          "
        >
          <BsImages className="fill-green-500" size={25} />
          <span className="text-gray-600 text-sm">Photo/video</span>
        </div>
        <div
          className="
            flex items-center justify-center gap-2 flex-1 py-2
            hover:bg-gray-200 transition cursor-pointer rounded-md
          "
        >
          <CiFaceSmile className="fill-amber-500" size={25} />
          <span className="text-gray-600 text-sm">Feeling/activity</span>
        </div>
      </div>
    </div>
  );
};

export default AddPost;

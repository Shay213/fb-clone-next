"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

import { GrEmoji } from "react-icons/gr";
import { MdOutlinePhotoCamera, MdSend } from "react-icons/md";
import { AiOutlineGif } from "react-icons/ai";

interface AddCommentProps {
  img?: string | null;
}

const AddComment = ({ img }: AddCommentProps) => {
  const [description, setDescription] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <div className="flex items-start gap-1 w-full">
      <Image
        src={img || "/avatar.jpeg"}
        alt="profile-img"
        width={30}
        height={30}
        className="rounded-full"
      />
      <div className="p-2 bg-gray-100 rounded-md flex-1">
        <textarea
          placeholder="Write a comment..."
          className="
              placeholder:text-gray-700 text-black bg-transparent outline-none 
              border-none resize-none text-sm h-auto scrollbar-none w-full
            "
          style={{ overflowWrap: "break-word" }}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            if (textareaRef.current) {
              textareaRef.current.style.height = "auto";
              textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }
          }}
          ref={textareaRef}
        />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div
              className="
              flex justify-center items-center p-1 rounded-full 
              cursor-pointer hover:bg-gray-200 transition 
            "
            >
              <GrEmoji size={18} className="fill-gray-700" />
            </div>
            <div
              className="
              flex justify-center items-center p-1 rounded-full 
              cursor-pointer hover:bg-gray-200 transition 
            "
            >
              <MdOutlinePhotoCamera size={18} className="fill-gray-700" />
            </div>
            <div
              className="
              flex justify-center items-center p-1 rounded-full 
              cursor-pointer hover:bg-gray-200 transition 
            "
            >
              <AiOutlineGif size={18} className="fill-gray-700" />
            </div>
          </div>
          <div
            className="
              flex justify-center items-center p-1 rounded-full 
              cursor-pointer hover:bg-gray-200 transition 
            "
          >
            <MdSend size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddComment;

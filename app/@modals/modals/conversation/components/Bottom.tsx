"use client";

import React, { useCallback, useRef, useState } from "react";

import { MdSend } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { BsImages, BsStickyFill } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import Textarea from "./Textarea";

const Bottom = () => {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSend = useCallback(async () => {
    try {
      setMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "";
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="p-2 flex items-center gap-1">
      <div className="flex items-center gap-1">
        <div
          className="
          flex justify-center items-center p-1 rounded-full cursor-pointer
          hover:bg-gray-200 transition 
        "
        >
          <BiPlus
            size={17}
            className="group-hover:fill-blue-500 fill-gray-500"
          />
        </div>
        {!isFocused && (
          <>
            <div
              className="
                flex justify-center items-center p-1 rounded-full cursor-pointer
                hover:bg-gray-200 transition 
              "
            >
              <BsImages
                size={17}
                className="group-hover:fill-blue-500 fill-gray-500"
              />
            </div>
            <div
              className="
                flex justify-center items-center p-1 rounded-full cursor-pointer
                hover:bg-gray-200 transition 
              "
            >
              <BsStickyFill
                size={17}
                className="group-hover:fill-blue-500 fill-gray-500"
              />
            </div>
            <div
              className="
                  flex justify-center items-center p-1 rounded-full cursor-pointer
                  hover:bg-gray-200 transition 
                "
            >
              <AiOutlineGif
                size={17}
                className="group-hover:fill-blue-500 fill-gray-500"
              />
            </div>
          </>
        )}
      </div>
      <Textarea
        message={message}
        setMessage={setMessage}
        handleSend={handleSend}
        setIsFocused={setIsFocused}
        ref={textareaRef}
      />
      <div
        className="
          flex justify-center items-center p-1 rounded-full cursor-pointer
          hover:bg-gray-200 transition 
        "
        onClick={handleSend}
      >
        <MdSend
          size={17}
          className={`${
            message.length > 0 ? "fill-blue-500" : "fill-gray-500"
          }`}
        />
      </div>
    </div>
  );
};

export default Bottom;

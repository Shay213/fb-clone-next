"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";

interface TextareaProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const Textarea = (
  { message, setMessage, handleSend, setIsFocused }: TextareaProps,
  ref: React.Ref<HTMLTextAreaElement | null>
) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useImperativeHandle(ref, () => textareaRef.current, [textareaRef]);

  return (
    <textarea
      className={`
          bg-gray-100 text-black placeholder:text-gray-600
          dark:bg-zinc-800 dark:text-zinc-200 dark:placeholder:text-zinc-400
          resize-none outline-none border-none h-auto scrollbar-none rounded-md
          px-2
        `}
      placeholder={"Aa"}
      value={message}
      onChange={(e) => {
        setMessage(e.target.value);
        if (textareaRef.current) {
          textareaRef.current.style.height = "auto";
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
      }}
      ref={textareaRef}
      style={{ overflowWrap: "break-word" }}
      rows={1}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleSend();
        }
      }}
    />
  );
};

export default forwardRef(Textarea);

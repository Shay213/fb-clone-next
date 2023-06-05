"use client";

import { useSession } from "next-auth/react";
import React, { useMemo, useRef, useState } from "react";

interface TextareaProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const Textarea = ({ description, setDescription }: TextareaProps) => {
  const { data: session } = useSession();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const charsCount = useMemo(() => {
    return description.length;
  }, [description]);

  return (
    <textarea
      className={`
          bg-slate-50 text-black placeholder:text-gray-600
          dark:bg-zinc-800 dark:text-zinc-200 dark:placeholder:text-zinc-400
          resize-none ${charsCount >= 120 ? "text-base" : "text-xl"}
          outline-none border-none h-auto scrollbar-none mb-4
        `}
      placeholder={`What's on your mind, ${session?.user?.name}`}
      value={description}
      onChange={(e) => {
        setDescription(e.target.value);
        if (textareaRef.current) {
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
      }}
      ref={textareaRef}
      style={{ overflowWrap: "break-word" }}
    />
  );
};

export default Textarea;

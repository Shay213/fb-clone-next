"use client";

import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";
import React, { useEffect, useRef } from "react";

const AddPostContextContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const homeModalsContext = useHomeModalsContext();

  useEffect(() => {
    const body = document.querySelector("body");
    const preventScrollClass = "prevent-scroll";

    if (homeModalsContext?.addPost.isOpen) {
      body?.classList.add(preventScrollClass);
    } else {
      body?.classList.remove(preventScrollClass);
    }

    return () => {
      body?.classList.remove(preventScrollClass);
    };
  }, [homeModalsContext?.addPost.isOpen]);

  if (!homeModalsContext) return null;

  return (
    <>
      {homeModalsContext.addPost.isOpen && (
        <div
          className={`
            fixed left-0 top-0 h-full w-full
            bg-black bg-opacity-70 z-[100]
          `}
          onClick={(e) => {
            e.stopPropagation();
            homeModalsContext.addPost.hide();
          }}
        >
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      )}
    </>
  );
};

export default AddPostContextContainer;

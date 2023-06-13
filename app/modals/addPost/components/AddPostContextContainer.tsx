"use client";

import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";
import React, { useEffect } from "react";

const AddPostContextContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const homeModalsContext = useHomeModalsContext();

  useEffect(() => {
    if (homeModalsContext?.addPost.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [homeModalsContext?.addPost.isOpen]);

  if (!homeModalsContext) return null;

  return (
    <>
      {homeModalsContext.addPost.isOpen && (
        <div
          className="
            absolute top-0 left-0 h-full w-full 
            bg-black bg-opacity-70 z-[100]
          "
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

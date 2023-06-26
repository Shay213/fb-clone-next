"use client";

import { useModalsContext } from "@/app/providers/ModalsProvider";
import React, { useEffect } from "react";

const AddPostContextContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const modalsContext = useModalsContext();

  useEffect(() => {
    const body = document.querySelector("body");
    const preventScrollClass = "prevent-scroll";

    if (modalsContext?.addPost.isOpen) {
      body?.classList.add(preventScrollClass);
    } else {
      body?.classList.remove(preventScrollClass);
    }

    return () => {
      body?.classList.remove(preventScrollClass);
    };
  }, [modalsContext?.addPost.isOpen]);

  if (!modalsContext) return null;

  return (
    <>
      {modalsContext.addPost.isOpen && (
        <div
          className={`
            fixed left-0 top-0 h-full w-full
            bg-black bg-opacity-70 z-[100]
          `}
          onClick={(e) => {
            e.stopPropagation();
            modalsContext.addPost.hide();
          }}
        >
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      )}
    </>
  );
};

export default AddPostContextContainer;

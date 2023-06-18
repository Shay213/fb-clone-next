"use client";

import updateConversation from "@/app/actions/conversation/updateConversation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IIsActiveContext {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isInputFocused: boolean;
  setIsInputFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const IsActiveContext = createContext<IIsActiveContext | null>(null);

export const useIsActiveContext = () => {
  return useContext(IsActiveContext);
};

const IsActiveContextProvider = ({
  children,
  friendId,
  userId,
}: {
  children: React.ReactNode;
  userId: string;
  friendId: string;
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const div = document.querySelector(".visibleConversation");

      if (target === div || div?.contains(target)) {
        setIsActive(true);
        updateConversation(userId, friendId).catch(() => {});
      } else {
        setIsActive(false);
      }
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [friendId, userId]);

  return (
    <IsActiveContext.Provider
      value={{
        isActive,
        setIsActive,
        isInputFocused,
        setIsInputFocused,
      }}
    >
      {children}
    </IsActiveContext.Provider>
  );
};

export default IsActiveContextProvider;

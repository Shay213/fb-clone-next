"use client";

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
}: {
  children: React.ReactNode;
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const div = document.querySelector(".visibleConversation");

      if (target === div || div?.contains(target)) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

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

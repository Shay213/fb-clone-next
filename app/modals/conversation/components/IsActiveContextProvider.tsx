"use client";

import React, { createContext, useContext, useState } from "react";

interface IIsActiveContext {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
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

  return (
    <IsActiveContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </IsActiveContext.Provider>
  );
};

export default IsActiveContextProvider;

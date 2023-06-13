"use client";

import React, { createContext, useContext, useState } from "react";

interface IAddCommentContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCommentContext = createContext<IAddCommentContext | null>(null);

export const useAddCommentContext = () => {
  return useContext(AddCommentContext);
};

const AddCommentContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AddCommentContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AddCommentContext.Provider>
  );
};

export default AddCommentContextProvider;

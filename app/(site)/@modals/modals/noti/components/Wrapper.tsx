"use client";

import React, { createContext, useContext, useState } from "react";
import Options from "./Options";

export type Option = "all" | "unread";

const CurrentOptionContext = createContext<Option>("all");

export const useCurrentOptionContext = () => {
  return useContext(CurrentOptionContext);
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [option, setOption] = useState<Option>("all");

  return (
    <>
      <Options setOption={setOption} currOption={option} />
      <CurrentOptionContext.Provider value={option}>
        {children}
      </CurrentOptionContext.Provider>
    </>
  );
};

export default Wrapper;

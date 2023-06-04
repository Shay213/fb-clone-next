import React from "react";
import ThemeItem from "./ThemeItem";

const ThemeBox = () => {
  return (
    <div
      className="
            bg-slate-50 dark:bg-zinc-700 py-4 px-5 rounded-md 
            shadow-sm border-[1px] border-gray-200 dark:border-none
            flex gap-3 z-[80] absolute top-full left-0
          "
    >
      <ThemeItem theme="dark" />
      <ThemeItem theme="light" />
      <ThemeItem theme="system" />
    </div>
  );
};

export default ThemeBox;

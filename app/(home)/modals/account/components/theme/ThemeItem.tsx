"use client";

import React, { useCallback } from "react";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HiComputerDesktop } from "react-icons/hi2";
import { useThemeContext } from "@/app/providers/ThemeProvider";

interface ThemeItemProps {
  theme: "dark" | "light" | "system";
}

const ThemeItem = ({ theme }: ThemeItemProps) => {
  const themeContext = useThemeContext();

  const handleDark = useCallback(() => {
    themeContext?.setDarkTheme();
  }, [themeContext]);

  const handleLight = useCallback(() => {
    themeContext?.setLightTheme();
  }, [themeContext]);

  const handleSystem = useCallback(() => {
    themeContext?.setSystemTheme();
  }, [themeContext]);

  const handleClick = useCallback(() => {
    switch (theme) {
      case "dark":
        handleDark();
        break;
      case "light":
        handleLight();
        break;
      case "system":
        handleSystem();
        break;
    }
  }, [theme, handleDark, handleLight, handleSystem]);

  return (
    <div
      className={`
        flex flex-col items-center gap-1 py-1 px-2 
        ${
          themeContext?.currentTheme === theme
            ? "border-b-[1px] border-blue-500"
            : "rounded-md hover:bg-gray-200 dark:hover:bg-zinc-600 cursor-pointer"
        }
        `}
      onClick={handleClick}
    >
      <div
        className={`
            flex justify-center items-center p-2 rounded-full 
            ${
              themeContext?.currentTheme === theme
                ? ""
                : "bg-gray-200 dark:bg-zinc-600"
            }
          `}
      >
        {theme === "dark" && (
          <MdDarkMode
            size={20}
            className={`
              ${
                themeContext?.currentTheme === theme
                  ? "fill-blue-500 text-blue-500"
                  : "fill-gray-600 text-gray-600 dark:fill-zinc-200 dark:text-zinc-200"
              }`}
          />
        )}
        {theme === "light" && (
          <MdLightMode
            size={20}
            className={`
              ${
                themeContext?.currentTheme === theme
                  ? "fill-blue-500 text-blue-500"
                  : "fill-gray-600 text-gray-600 dark:fill-zinc-200 dark:text-zinc-200"
              }`}
          />
        )}
        {theme === "system" && (
          <HiComputerDesktop
            size={20}
            className={`
              ${
                themeContext?.currentTheme === theme
                  ? "fill-blue-500 text-blue-500"
                  : "fill-gray-600 text-gray-600 dark:fill-zinc-200 dark:text-zinc-200"
              }`}
          />
        )}
      </div>
      <span className="text-gray-600 dark:text-zinc-200 text-sm first-letter:uppercase">
        {theme}
      </span>
    </div>
  );
};

export default ThemeItem;

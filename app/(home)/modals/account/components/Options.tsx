import React from "react";

import { AiFillSetting, AiFillQuestionCircle } from "react-icons/ai";
import { MdDarkMode, MdFeedback } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import OptionWrapper from "./OptionWrapper";

export enum OPTIONS_LABELS {
  SETTINGS = "Settings & privacy",
  HELP = "Help & support",
  DISPLAY = "Display & accessibility",
  FEEDBACK = "Give feedback",
  LOGOUT = "Log Out",
}

const OPTIONS = [
  { name: OPTIONS_LABELS.SETTINGS, icon: AiFillSetting },
  { name: OPTIONS_LABELS.HELP, icon: AiFillQuestionCircle },
  { name: OPTIONS_LABELS.DISPLAY, icon: MdDarkMode },
  { name: OPTIONS_LABELS.FEEDBACK, icon: MdFeedback },
  { name: OPTIONS_LABELS.LOGOUT, icon: IoLogOutOutline },
];

const Options = () => {
  return (
    <div className="flex flex-col gap-2">
      {OPTIONS.map(({ name, icon: Icon }) => (
        <OptionWrapper key={name} name={name}>
          <div
            className="
              flex justify-between items-center 
              hover:bg-gray-200 cursor-pointer rounded-md
              dark:hover:bg-zinc-700
            "
          >
            <div className="flex items-center gap-2">
              <div
                className="
                flex justify-center items-center p-2 bg-gray-200 
                rounded-full dark:bg-zinc-700
              "
              >
                <Icon
                  size={20}
                  className="fill-gray-700 text-gray-700 dark:fill-zinc-200 dark:text-zinc-200"
                />
              </div>
              <span className="text-gray-700 dark:text-zinc-200 text-sm">
                {name}
              </span>
            </div>
            {(name === OPTIONS_LABELS.SETTINGS ||
              name === OPTIONS_LABELS.HELP ||
              name === OPTIONS_LABELS.DISPLAY) && (
              <IoIosArrowForward
                size={20}
                className="fill-gray-700 text-gray-700 dark:fill-zinc-200 dark:text-zinc-200"
              />
            )}
          </div>
        </OptionWrapper>
      ))}
    </div>
  );
};

export default Options;

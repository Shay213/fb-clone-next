import React from "react";
import { Option } from "./Wrapper";

const OPTIONS: Option[] = ["all", "unread"];

interface OptionsProps {
  currOption: Option;
  setOption: React.Dispatch<React.SetStateAction<Option>>;
}

const Options = ({ setOption, currOption }: OptionsProps) => {
  return (
    <div className="flex gap-2">
      {OPTIONS.map((o) => (
        <div
          key={o}
          className={`
              first-letter:uppercase p-2 transition rounded-full min-w-[50px] text-center
              ${
                currOption === o
                  ? "bg-blue-500 hover:bg-blue-500 cursor-default text-white"
                  : "dark:text-zinc-200 dark:hover:bg-zinc-600 hover:bg-gray-200 cursor-pointer"
              }
            `}
          onClick={() => setOption(o)}
        >
          {o}
        </div>
      ))}
    </div>
  );
};

export default Options;

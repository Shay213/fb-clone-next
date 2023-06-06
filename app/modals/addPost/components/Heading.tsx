import React from "react";
import CloseButton from "./CloseButton";

const Heading = () => {
  return (
    <div
      className="
        flex items-center p-3 border-b-[1px]
        border-gray-200 dark:border-zinc-700
      "
    >
      <div className="flex-1 text-center text-2xl font-semibold dark:text-zinc-200">
        Create post
      </div>
      <CloseButton />
    </div>
  );
};

export default Heading;

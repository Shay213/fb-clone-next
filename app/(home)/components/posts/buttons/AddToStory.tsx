import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

const AddToStory = () => {
  return (
    <button
      type="button"
      className="
  flex gap-2 justify-center items-center w-max px-6 py-2 font-normal
  bg-blue-500 rounded-md text-white hover:bg-blue-600 transition
  dark:bg-blue-600 dark:hover:bg-blue-500
"
    >
      <AiOutlinePlus size={18} />
      Add To Story
    </button>
  );
};

export default AddToStory;

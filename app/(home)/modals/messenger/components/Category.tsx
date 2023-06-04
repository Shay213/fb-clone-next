import React from "react";

const Category = ({ label }: { label: string }) => {
  return (
    <div
      className="
        flex justify-center items-center p-2
        hover:bg-gray-200 rounded-full cursor-pointer
        dark:hover:bg-zinc-600
      "
    >
      <span className="first-letter:uppercase text-gray-700 dark:text-zinc-200">
        {label}
      </span>
    </div>
  );
};

export default Category;

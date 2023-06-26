import React from "react";

const Category = ({ label, active }: { label: string; active: string }) => {
  return (
    <div
      className={`
        flex justify-center items-center p-2 rounded-full 
        ${
          active === label
            ? "bg-blue-200"
            : "hover:bg-gray-200 dark:hover:bg-zinc-600 cursor-pointer"
        }
      `}
    >
      <span
        className={`first-letter:uppercase ${
          active === label
            ? "text-blue-600"
            : "text-gray-700 dark:text-zinc-200"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

export default Category;

import React from "react";

const Category = ({ label }: { label: string }) => {
  return (
    <div
      className="
        flex justify-center items-center p-2
        hover:bg-gray-200 rounded-full cursor-pointer
      "
    >
      <span className="first-letter:uppercase text-gray-700">{label}</span>
    </div>
  );
};

export default Category;

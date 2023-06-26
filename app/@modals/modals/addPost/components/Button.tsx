"use client";

import React from "react";

const Button = ({ disabled }: { disabled?: boolean }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="
          text-center py-1 bg-blue-500 text-white text-lg
          font-semibold rounded-md disabled:cursor-not-allowed
          disabled:bg-gray-300 disabled:text-gray-500
        "
    >
      Post
    </button>
  );
};

export default Button;

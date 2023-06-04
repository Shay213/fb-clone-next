import React from "react";

const Footer = () => {
  return (
    <div
      className="
        flex justify-center items-center border-t-[1px] bg-white
        basis-12 shrink-0 dark:bg-zinc-800 dark:border-zinc-600
      "
    >
      <div className="text-blue-500 hover:underline cursor-pointer">
        See all in Messenger
      </div>
    </div>
  );
};

export default Footer;

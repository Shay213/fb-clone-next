import React from "react";

const OPTIONS = ["all", "unread"];

const Options = () => {
  return (
    <div className="flex gap-2">
      {OPTIONS.map((o) => (
        <div
          key={o}
          className="
              first-letter:uppercase p-2 hover:bg-gray-200 
              cursor-pointer transition rounded-full
              dark:text-zinc-200 dark:hover:bg-zinc-600
            "
        >
          {o}
        </div>
      ))}
    </div>
  );
};

export default Options;

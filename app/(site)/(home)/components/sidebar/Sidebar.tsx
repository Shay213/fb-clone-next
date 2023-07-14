import React from "react";
import SidebarOptions from "./SidebarOptions";
import SidebarOption from "./SidebarOption";
import { MdOutlineAppShortcut } from "react-icons/md";

const Sidebar = () => {
  return (
    <div
      className="
        sticky top-[56px] px-2 pt-4 overflow-auto z-10 min-w-[240px] w-1/4 max-w-[350px] h-[calc(100vh-56px)]
        scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-100
        dark:scrollbar-thumb-zinc-700 dark:scrollbar-track-zinc-500
      "
    >
      <SidebarOptions />
      <hr className="border-gray-300 my-3 dark:border-zinc-700" />
      <h2 className="text-gray-600 mb-2 dark:text-zinc-300">Your shortcuts</h2>
      <div>
        <SidebarOption
          icon={MdOutlineAppShortcut}
          label="Shortcut name"
          labelColor="text-gray-700 dark:text-zinc-300"
          iconFill="fill-slate-600 dark:fill-zinc-300"
        />
      </div>
    </div>
  );
};

export default Sidebar;

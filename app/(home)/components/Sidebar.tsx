import React from "react";
import SidebarOptions from "./SidebarOptions";
import SidebarOption from "./SidebarOption";
import { MdOutlineAppShortcut } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sticky top-[70px] h-[calc(100vh-70px)] px-2 overflow-auto z-10">
      <SidebarOptions />
      <hr className="border-gray-300 my-3" />
      <h2 className="text-gray-600 mb-2">Your shortcuts</h2>
      <div>
        <SidebarOption icon={MdOutlineAppShortcut} label="Shortcut name" />
      </div>
    </div>
  );
};

export default Sidebar;

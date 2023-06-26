import React from "react";
import Image from "next/image";
import HeaderIcons from "./HeaderIcons";

const Header = ({ name }: { name: string }) => {
  return (
    <div
      className="
        p-2 flex items-center justify-between 
        shadow-sm border-b-[1px] border-gray-200
      "
    >
      <div className="flex items-center gap-1">
        <Image src={"/avatar.jpeg"} alt="user-img" width={35} height={35} />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold">{name}</h3>
          <span className="text-xs">Active 9h ago</span>
        </div>
      </div>
      <HeaderIcons />
    </div>
  );
};

export default Header;

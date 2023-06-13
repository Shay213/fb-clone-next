import React from "react";
import Image from "next/image";
import HeaderIcons from "./HeaderIcons";

const USER = {
  id: 1,
  img: null,
  name: "John Doe",
  active: "3h ago",
};

const Header = () => {
  return (
    <div
      className="
        p-2 flex items-center justify-between 
        shadow-sm border-b-[1px] border-gray-200
      "
    >
      <div className="flex items-center gap-1">
        <Image
          src={USER.img || "/avatar.jpeg"}
          alt="user-img"
          width={35}
          height={35}
        />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold">{USER.name}</h3>
          <span className="text-xs">Active {USER.active}</span>
        </div>
      </div>
      <HeaderIcons />
    </div>
  );
};

export default Header;

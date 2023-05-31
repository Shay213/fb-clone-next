import React from "react";
import { IconType } from "react-icons";

import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineYoutube,
  AiFillYoutube,
  AiOutlineShop,
  AiTwotoneShop,
} from "react-icons/ai";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";

enum MENU {
  HOME = "home",
  WATCH = "watch",
  MARKETPLACE = "marketplace",
  GROUPS = "groups",
}

const ICONS = [
  {
    name: MENU.HOME,
    outline: AiOutlineHome,
    fill: AiFillHome,
  },
  {
    name: MENU.WATCH,
    outline: AiOutlineYoutube,
    fill: AiFillYoutube,
  },
  {
    name: MENU.MARKETPLACE,
    outline: AiOutlineShop,
    fill: AiTwotoneShop,
  },
  {
    name: MENU.GROUPS,
    outline: HiOutlineUserGroup,
    fill: HiUserGroup,
  },
];

const Menu = () => {
  const active = MENU.HOME;
  return (
    <div className="hidden md:flex gap-2 h-full">
      {ICONS.map(({ name, outline: Outline, fill: Fill }) => (
        <div
          key={name}
          className={`w-24 group py-2 ${
            active === name ? "border-b-2 border-blue-500" : ""
          }`}
        >
          <div
            className={`
              w-full h-full flex flex-col items-center 
              justify-center rounded-md transition-colors
              ${
                active !== name ? "group-hover:bg-gray-200 cursor-pointer" : ""
              }`}
          >
            {active === name ? (
              <Fill size={22} className={`flex-1 fill-blue-500`} />
            ) : (
              <Outline size={22} className="flex-1" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

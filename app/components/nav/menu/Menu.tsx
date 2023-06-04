"use client";

import React, { useMemo } from "react";

import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineYoutube,
  AiFillYoutube,
  AiOutlineShop,
  AiTwotoneShop,
} from "react-icons/ai";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const active = useMemo(() => {
    const name = pathname.split("/")[1];
    return name === "" ? "home" : name;
  }, [pathname]);

  return (
    <div className="hidden md:flex gap-2 h-full">
      {ICONS.map(({ name, outline: Outline, fill: Fill }) => (
        <Link
          key={name}
          href={`/${name === "home" ? "" : name}`}
          className={`h-full ${
            active !== name ? "cursor-pointer" : "cursor-default"
          }`}
        >
          <div
            className={`w-24 group py-2 h-full ${
              active === name ? "border-b-2 border-blue-500" : ""
            }`}
          >
            <div
              className={`
            w-full h-full flex flex-col items-center 
            justify-center rounded-md transition-colors
            ${
              active !== name
                ? "group-hover:bg-gray-200 cursor-pointer dark:group-hover:bg-zinc-600"
                : ""
            }`}
            >
              {active === name ? (
                <Fill size={22} className={`flex-1 fill-blue-500`} />
              ) : (
                <Outline size={22} className="flex-1 dark:text-zinc-300" />
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;

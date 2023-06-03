import React from "react";
import Logo from "./Logo";
import Menu from "./menu/Menu";
import UserMenu from "./userMenu/UserMenu";
import SearchPanel from "./SearchPanel";

const Nav = () => {
  return (
    <div
      className="sticky top-0 w-full shadow-md bg-white h-14 
        z-30
      "
    >
      <div className="flex justify-between px-2 h-full">
        <div className="flex items-center gap-2">
          <Logo />
          <SearchPanel />
        </div>
        <div className="h-full">
          <Menu />
        </div>
        <div className="h-full">
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default Nav;

import React from "react";

const ICON_SIZE = 22;

import Account from "./Account";
import Menu from "./menu/Menu";
import Messenger from "./messenger/Messenger";
import Noti from "./noti/Noti";
import UnseenNotiCount from "./noti/UnseenNotiCount";

const UserMenu = () => {
  return (
    <div className="h-full flex items-center gap-2">
      <Menu size={ICON_SIZE} />
      <Messenger size={ICON_SIZE} />
      <Noti size={ICON_SIZE}>
        {/* @ts-ignore */}
        <UnseenNotiCount />
      </Noti>
      <Account />
    </div>
  );
};

export default UserMenu;

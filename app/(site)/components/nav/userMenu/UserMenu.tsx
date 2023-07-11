import React from "react";

const ICON_SIZE = 22;

import Account from "./Account";
import Menu from "./menu/Menu";
import Messenger from "./messenger/Messenger";
import Noti from "./noti/Noti";
import getNotificationsCount from "@/app/actions/getNotificationsCount";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const UserMenu = async () => {
  const session = await getServerSession(authOptions);

  const { notificationsCount } = await getNotificationsCount(
    session?.user.id as string
  );

  return (
    <div className="h-full flex items-center gap-2">
      <Menu size={ICON_SIZE} />
      <Messenger size={ICON_SIZE} />
      <Noti
        size={ICON_SIZE}
        initialNotificationsCount={notificationsCount}
        userId={session?.user.id}
      />
      <Account />
    </div>
  );
};

export default UserMenu;

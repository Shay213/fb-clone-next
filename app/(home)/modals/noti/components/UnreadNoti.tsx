import React from "react";

import getUnreadNotifications from "@/app/actions/notifications/getUnreadNotifications";
import NotiSection from "./NotiSection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const UnreadNoti = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  const unreadNoti = getUnreadNotifications(session.user.email);
  return (
    <div>
      {/* @ts-ignore */}
      <NotiSection label="Unread" promise={unreadNoti} />
    </div>
  );
};

export default UnreadNoti;

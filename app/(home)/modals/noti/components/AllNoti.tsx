import React from "react";

import getNewNotifications from "@/app/actions/notifications/getNewNotifications";
import getEalierNotifications from "@/app/actions/notifications/getEalierNotifications";
import NotiSection from "./NotiSection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const AllNoti = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  const newNoti = getNewNotifications(session.user.email);
  const earlierNoti = getEalierNotifications(session.user.email);
  return (
    <div>
      {/* @ts-ignore */}
      <NotiSection label="New" promise={newNoti} />
      {/* @ts-ignore */}
      <NotiSection label="Earlier" promise={earlierNoti} />
    </div>
  );
};

export default AllNoti;

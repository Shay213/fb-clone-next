import React from "react";
import NotiPanel from "./components/NotiPanel";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getNotifications from "@/app/actions/getNotifications";

const NotiModal = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  const notifications = await getNotifications(session.user.id);
  return (
    <div
      className="
          fixed top-[62px] right-0 bg-transparent p-2 z-50 
          max-h-[calc(100vh-160px)] h-[calc(100vh-160px)]
          overflow-hidden
        "
    >
      <NotiPanel
        initNotifications={notifications}
        userId={session.user.id}
        userName={session.user.name as string}
      />
    </div>
  );
};

export default NotiModal;

import React from "react";
import Heading from "./Heading";
import getNotifications from "@/app/actions/getNotifications";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Options from "./Options";

const NotiPanel = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  const notifications = await getNotifications(session.user.id);

  return (
    <div
      className="
        bg-slate-50 dark:bg-zinc-800 py-4 px-5 rounded-md shadow-sm border-[1px] 
        border-gray-200 dark:border-none animate-slideInRightToLeft
        flex flex-col gap-3 min-w-[250px]
        "
    >
      <Heading />
      <Options
        initNotifications={notifications}
        userId={session.user.id}
        userName={session.user.name as string}
      />
    </div>
  );
};

export default NotiPanel;

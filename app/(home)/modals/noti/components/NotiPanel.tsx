import React from "react";
import Heading from "./Heading";
import Options from "./Options";
import NotiSection from "./NotiSection";
import getNotifications from "@/app/actions/notifications/getNotifications";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const NotiPanel = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return <h1>Please login to see notifications</h1>;
  }

  const notifications = await getNotifications(session.user.email);
  const newNotifications = notifications.filter((n) => n.new);
  const earlierNotifications = notifications.filter((n) => !n.new);

  return (
    <div
      className="
        bg-slate-50 dark:bg-zinc-800 py-4 px-5 rounded-md shadow-sm border-[1px] 
        border-gray-200 dark:border-none animate-slideInRightToLeft
        flex flex-col gap-3 min-w-[250px]
        "
    >
      <Heading />
      <Options />
      <NotiSection label="New" items={newNotifications} />
      <NotiSection label="Earlier" items={earlierNotifications} />
    </div>
  );
};

export default NotiPanel;

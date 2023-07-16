"use client";

import Heading from "./Heading";
import React, { useEffect, useState } from "react";
import { ExtendedNotification } from "@/app/actions/getNotifications";
import NotiSection from "./NotiSection";
import { pusherClient } from "@/lib/pusher";
import { useModalsContext } from "@/app/providers/ModalsProvider";

const OPTIONS = ["all", "unread"] as const;

type OPTIONS_VALUES = (typeof OPTIONS)[number];

interface NotiPanelProps {
  initNotifications: ExtendedNotification[];
  userId: string;
  userName: string;
}

const NotiPanel = ({ initNotifications, userId, userName }: NotiPanelProps) => {
  const [option, setOption] = useState<OPTIONS_VALUES>("all");
  const [notifications, setNotifications] = useState(initNotifications);
  const modalsContext = useModalsContext();

  useEffect(() => {
    const handler = (notification: ExtendedNotification) => {
      console.log(notification);
      setNotifications((prev) => [notification, ...prev]);
    };

    pusherClient.subscribe(`notifications-${userId}`);
    pusherClient.bind("incoming-notifications", handler);

    return () => {
      pusherClient.unsubscribe(`notifications-${userId}`);
      pusherClient.unbind("incoming-notifications", handler);
    };
  }, [userId]);

  let content: ExtendedNotification[];

  switch (option) {
    case "all":
      content = notifications;
      break;
    case "unread":
      content = notifications.filter((n) => n.read === false);
      break;
  }
  return (
    <div
      className={`
        fixed top-[68px] right-0 p-2 z-50
        max-h-[calc(100vh-160px)] h-[calc(100vh-160px)] overflow-auto
        bg-slate-50 dark:bg-zinc-800 py-4 px-5 rounded-md shadow-sm border-[1px] 
        border-gray-200 dark:border-none ${
          modalsContext?.noti.isOpen
            ? "animate-slideInRightToLeft"
            : "translate-x-full"
        }
        flex flex-col gap-3 min-w-[250px]
        `}
    >
      <Heading />
      <>
        <div className="flex gap-2">
          {OPTIONS.map((o) => (
            <div
              key={o}
              className={`
              first-letter:uppercase p-2 transition rounded-full min-w-[50px] text-center
              ${
                option === o
                  ? "bg-blue-500 hover:bg-blue-500 cursor-default text-white"
                  : "dark:text-zinc-200 dark:hover:bg-zinc-600 hover:bg-gray-200 cursor-pointer"
              }
            `}
              onClick={() => setOption(o)}
            >
              {o}
            </div>
          ))}
        </div>
        <NotiSection
          label={option}
          notifications={content}
          userId={userId}
          userName={userName}
        />
      </>
    </div>
  );
};

export default NotiPanel;

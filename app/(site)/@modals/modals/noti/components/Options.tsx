"use client";

import React, { useEffect, useState } from "react";
import { ExtendedNotification } from "@/app/actions/getNotifications";
import NotiSection from "./NotiSection";
import { pusherClient } from "@/lib/pusher";

const OPTIONS = ["all", "unread"] as const;

type OPTIONS_VALUES = (typeof OPTIONS)[number];

const Options = ({
  initNotifications,
  userId,
  userName,
}: {
  initNotifications: ExtendedNotification[];
  userId: string;
  userName: string;
}) => {
  const [option, setOption] = useState<OPTIONS_VALUES>("all");
  const [notifications, setNotifications] = useState(initNotifications);

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
  );
};

export default Options;

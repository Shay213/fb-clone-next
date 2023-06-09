"use client";

import getCountUnseenNotifications from "@/app/actions/notifications/getUnseenNotifications";
import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";
import React, { useEffect, useMemo, useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { useSession } from "next-auth/react";
import updateSeenNotifications from "@/app/actions/notifications/updateSeenNotifications";

const Noti = ({ size }: { size: number }) => {
  const homeModalsContext = useHomeModalsContext();
  const isOpen = useMemo(() => {
    return !!homeModalsContext?.noti.isOpen;
  }, [homeModalsContext?.noti.isOpen]);
  const [unseenNotiCount, setUnseenNotiCount] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    (async () => {
      if (session?.user?.email) {
        const count = await getCountUnseenNotifications(session.user.email);
        setUnseenNotiCount(count);
      }
    })();
  }, [session?.user?.email]);

  return (
    <div
      className={`
        h-10 w-10 flex items-center relative
        justify-center rounded-full cursor-pointer
        transition-colors ${
          isOpen
            ? "bg-blue-200 hover:bg-blue-300"
            : "hover:bg-gray-300 bg-gray-200 dark:hover:bg-zinc-500 dark:bg-zinc-600"
        } 
      `}
      onClick={async () => {
        homeModalsContext?.hideOthers("noti");
        homeModalsContext?.noti.toggle();
        if (session?.user?.email)
          await updateSeenNotifications(session?.user?.email);
      }}
    >
      <IoIosNotifications
        size={size}
        className={`${
          isOpen ? "text-blue-700" : "text-gray-900 dark:text-zinc-200"
        }`}
      />
      {unseenNotiCount > 0 && (
        <div
          className="
          h-[18px] w-[18px] rounded-full flex items-center justify-center
          absolute top-0 right-0 bg-red-500 text-white
          text-sm
        "
        >
          {unseenNotiCount}
        </div>
      )}
    </div>
  );
};

export default Noti;

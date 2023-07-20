"use client";

import React, { useEffect, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { useModalsContext } from "@/app/providers/ModalsProvider";
import { useSession } from "next-auth/react";
import { pusherClient } from "@/lib/pusher";

interface MessengerProps {
  size: number;
  initialUnReadMessages: number;
}

const Messenger = ({ size, initialUnReadMessages }: MessengerProps) => {
  const homeModalsContext = useModalsContext();
  const isOpen = !!homeModalsContext?.messenger.isOpen;
  const [unReadMessages, setUnReadMessages] = useState(initialUnReadMessages);
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;
    const handler = () => {
      setUnReadMessages((prev) => prev + 1);
    };

    pusherClient.subscribe(`unread-messages-count-${session.user.id}`);
    pusherClient.bind("new-unread-message", handler);

    return () => {
      pusherClient.unsubscribe(`unread-messages-count-${session.user.id}`);
      pusherClient.unbind("new-unread-message", handler);
    };
  }, [session]);

  useEffect(() => {
    if (isOpen && session && unReadMessages > 0) {
      //markCurrentNotificationsAsSeen(session.user.id);
      //setUnReadMessages(0);
    }
  }, [isOpen, session, unReadMessages]);

  return (
    <>
      <div
        className={`
         h-10 w-10 flex items-center transition-colors
        justify-center rounded-full cursor-pointer relative
        ${
          isOpen
            ? "bg-blue-200 hover:bg-blue-300"
            : "hover:bg-gray-300 bg-gray-200 dark:hover:bg-zinc-500 dark:bg-zinc-600"
        } 
      `}
        onClick={() => {
          homeModalsContext?.hideOthers("messenger");
          homeModalsContext?.messenger.toggle();
        }}
      >
        <AiFillMessage
          size={size}
          className={`${
            isOpen ? "text-blue-700" : "text-gray-900 dark:text-zinc-200"
          }`}
        />
        <div
          className="
          h-[18px] w-[18px] rounded-full flex items-center 
          justify-center absolute top-0 right-0 bg-red-500 
          text-white text-sm"
        >
          {unReadMessages}
        </div>
      </div>
    </>
  );
};

export default Messenger;

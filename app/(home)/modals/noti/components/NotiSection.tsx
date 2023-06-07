import Image from "next/image";
import React from "react";
import { ExtendedNotification } from "@/app/actions/notifications/getNotifications";
import moment from "moment";

interface NotiSectionProps {
  label: string;
  items: ExtendedNotification[];
}

const NotiSection = ({ label, items }: NotiSectionProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold dark:text-zinc-200">{label}</h3>
        <div
          className="
          flex justify-center items-center p-1 
          hover:bg-gray-200 cursor-pointer 
          transition text-blue-500 text-sm
          rounded-full dark:hover:bg-zinc-600
        "
        >
          See all
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="
                flex gap-2 p-2 items-center rounded-md
                hover:bg-gray-200 cursor-pointer transition
                dark:hover:bg-zinc-600
              "
          >
            <div>
              <Image
                src={"/avatar.jpeg"}
                alt="img"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-sm max-w-[320px]">
              <p className="dark:text-zinc-200">{item.message}</p>
              <span className="dark:text-zinc-300">
                {moment(item.createdAt).fromNow()}
              </span>
            </div>
            {!item.read && (
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotiSection;

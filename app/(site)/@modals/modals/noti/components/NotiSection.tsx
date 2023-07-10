import Image from "next/image";
import moment from "moment";
import Message from "./notiType/friendRequest/Message";
import Buttons from "./notiType/friendRequest/Buttons";
import { ExtendedNotification } from "@/app/actions/getNotifications";

interface NotiSectionProps {
  label: string;
  notifications: ExtendedNotification[];
  userId: string;
}

const NotiSection = ({ label, notifications, userId }: NotiSectionProps) => {
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
        {notifications.map((n) => (
          <div
            key={n.id}
            className="
                flex gap-2 p-2 items-center rounded-md
                hover:bg-gray-200 cursor-pointer transition
                dark:hover:bg-zinc-600
              "
          >
            <div>
              <Image
                src={n.sender.picture || "/avatar.jpeg"}
                alt="img"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-sm max-w-[320px]">
              <div className="flex flex-col">
                <Message
                  type={n.type}
                  name={`${n.sender.firstName} ${n.sender.lastName}`}
                />
                <span className="dark:text-zinc-300">
                  {moment(n.createdAt).fromNow()}
                </span>
                {n.type === "FRIEND_REQUEST" && !n.read && (
                  <Buttons
                    id={n.id}
                    currUserId={userId}
                    senderId={n.senderId}
                    senderName={`${n.sender.firstName} ${n.sender.lastName}`}
                  />
                )}
              </div>
            </div>
            {!n.read && (
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotiSection;

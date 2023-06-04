import React from "react";
import Image from "next/image";

const CHATS_ITEMS = [
  {
    id: 1,
    img: "",
    name: "John Doe",
    lastMessage: {
      name: "Mark Salt",
      desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      date: "2023-03-23 12:00:00",
      read: false,
    },
  },
];

const Chats = () => {
  return (
    <div className="flex flex-col gap-3">
      {CHATS_ITEMS.map((chat) => (
        <div
          key={chat.id}
          className="
              flex items-center gap-2 hover:bg-gray-200 
              cursor-pointer p-2 rounded-md dark:hover:bg-zinc-700
            "
        >
          <Image
            src={chat.img || "/avatar.jpeg"}
            alt="chat-image"
            width={45}
            height={45}
            className="object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold dark:text-zinc-200">
              {chat.name}
            </h4>
            <div>
              <span className="text-xs dark:text-zinc-300">
                {`${chat.lastMessage.name}: ${chat.lastMessage.desc.slice(
                  0,
                  30
                )}... 1w`}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;

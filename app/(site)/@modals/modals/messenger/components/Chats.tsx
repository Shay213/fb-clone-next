import React from "react";
import Image from "next/image";
import moment from "moment";
import ChatWrapper from "./ChatWrapper";

const Chats = async () => {
  return (
    <div className="flex flex-col gap-3">
      {[].map((item) => {
        const lastMessage = "";
        if (!lastMessage) {
          return (
            <ChatWrapper key={""} userId={""} friendId={""}>
              <div className="flex items-center gap-2">
                <Image
                  src={"/avatar.jpeg"}
                  alt="chat-image"
                  width={45}
                  height={45}
                  className="object-cover rounded-full"
                />
                <h4 className="text-sm font-semibold dark:text-zinc-200">
                  {``}
                </h4>
              </div>
            </ChatWrapper>
          );
        }
        const isLastMessageUsers = true;
        return (
          <ChatWrapper key={""} userId={""} friendId={""}>
            <div className="flex-1 flex items-center gap-2">
              <Image
                src={"/avatar.jpeg"}
                alt="chat-image"
                width={45}
                height={45}
                className="object-cover rounded-full"
              />
              <div className="flex-1 flex flex-col">
                <h4 className="text-sm font-semibold dark:text-zinc-200">
                  {``}
                </h4>
                <div className="flex gap-2">
                  <span
                    className={`text-xs dark:text-zinc-300 ${
                      true ? "font-bold" : ""
                    }`}
                  >
                    {`${isLastMessageUsers ? "You" : ""}: ${
                      "lastMessage.description".length > 30
                        ? "lastMessage.description".slice(0, 30) + "..."
                        : "lastMessage.description"
                    }`}
                  </span>
                  <span className="text-xs dark:text-zinc-300">
                    {moment(new Date()).fromNow()}
                  </span>
                </div>
              </div>
            </div>
            {!isLastMessageUsers && true && (
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            )}
          </ChatWrapper>
        );
      })}
    </div>
  );
};

export default Chats;

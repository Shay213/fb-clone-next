import React from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import IsActiveContextProvider from "./IsActiveContextProvider";
import Messages from "./Messages";
import getFriends from "@/app/actions/friends/getFriends";
import getUserId from "@/app/actions/user/getUserId";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const ConversationPanel = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }

  const friendsData = getFriends(session.user.email);
  const userIdData = getUserId(session.user.email);

  const [friends, userId] = await Promise.all([friendsData, userIdData]);

  return (
    <>
      {friends.map((f) => (
        <div
          className="
            h-full w-full bg-white z-[100] rounded-md shadow-lg 
            animate-slideInBottomToTop conversation flex-col
            hidden
          "
          key={f.id}
          id={userId + f.id}
        >
          <IsActiveContextProvider>
            <Header name={`${f.firstName} ${f.lastName}`} />
            {/* @ts-ignore */}
            <Messages friendId={f.id} userId={userId} />
            <Bottom friendId={f.id} userId={userId} />
          </IsActiveContextProvider>
        </div>
      ))}
    </>
  );
};

export default ConversationPanel;

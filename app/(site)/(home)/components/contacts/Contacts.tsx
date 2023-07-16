import React from "react";
import Header from "./Header";
import Groups from "./Groups";
import Friends from "./Friends";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getConversations from "@/app/actions/getConversations";

const Contacts = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  const conversations = await getConversations(session.user.id);
  return (
    <div className="sticky top-[56px] pt-4 pr-2 overflow-auto z-10 min-w-[180px] w-1/4 max-w-[280px] h-[calc(100vh-56px)]">
      <Header />
      <Friends initConversations={conversations} userId={session.user.id} />
      <hr className="border-gray-300 dark:border-zinc-600 my-4" />
      <Groups />
    </div>
  );
};

export default Contacts;

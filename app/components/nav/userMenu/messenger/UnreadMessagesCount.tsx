import getUnreadMessages from "@/app/actions/conversations/getUnreadMessages";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";

const UnreadMessagesCount = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return null;
  }
  const count = await getUnreadMessages(session.user.email);

  if (count.unreadCount === 0) {
    return null;
  }

  return (
    <div
      className="
      h-[18px] w-[18px] rounded-full flex items-center 
      justify-center absolute top-0 right-0 bg-red-500 
      text-white text-sm"
    >
      {count.unreadCount}
    </div>
  );
};

export default UnreadMessagesCount;

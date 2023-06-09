import getCountUnseenNotifications from "@/app/actions/notifications/getUnseenNotifications";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const UnseenNotiCount = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return null;
  }
  const count = await getCountUnseenNotifications(session.user.email);

  if (count === 0) {
    return null;
  }

  return (
    <div
      className="
      h-[18px] w-[18px] rounded-full flex items-center 
      justify-center absolute top-0 right-0 bg-red-500 
      text-white text-sm"
    >
      {count}
    </div>
  );
};

export default UnseenNotiCount;

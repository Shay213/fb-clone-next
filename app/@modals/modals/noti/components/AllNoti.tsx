import React from "react";

import NotiSection from "./NotiSection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const AllNoti = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  return (
    <div>
      <NotiSection label="New" />
      <NotiSection label="Earlier" />
    </div>
  );
};

export default AllNoti;

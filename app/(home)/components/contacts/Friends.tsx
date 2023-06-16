import React from "react";
import Friend from "./Friend";
import getFriends from "@/app/actions/friends/getFriends";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FriendWrapper from "./FriendWrapper";
import getUserId from "@/app/actions/user/getUserId";

const Friends = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }

  const friends = await getFriends(session.user.email);
  const userId = await getUserId(session.user.email);

  return (
    <div>
      {friends.map((f) => {
        return (
          <FriendWrapper key={f.id} userId={userId} friendId={f.id}>
            <Friend name={`${f.firstName} ${f.lastName}`} />
          </FriendWrapper>
        );
      })}
    </div>
  );
};

export default Friends;

import React from "react";
import Friend from "./Friend";
import getFriends from "@/app/actions/friends/getFriends";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FriendWrapper from "./FriendWrapper";

const Friends = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }

  const friends = await getFriends(session.user.email);

  return (
    <div>
      {friends.map((friend) => (
        <FriendWrapper key={friend.id}>
          <Friend name={`${friend.firstName} ${friend.lastName}`} />
        </FriendWrapper>
      ))}
    </div>
  );
};

export default Friends;

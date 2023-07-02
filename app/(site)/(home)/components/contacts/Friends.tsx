import React from "react";
import Friend from "./Friend";
import FriendWrapper from "./FriendWrapper";

const Friends = async () => {
  return (
    <div>
      {[].map((item) => {
        return (
          <FriendWrapper key={item.id}>
            <Friend name="test" />
          </FriendWrapper>
        );
      })}
    </div>
  );
};

export default Friends;

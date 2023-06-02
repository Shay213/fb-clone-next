import React from "react";
import Friend from "./Friend";

const DATA = [
  {
    id: 1,
    name: "Test name",
  },
  {
    id: 2,
    name: "Test name",
  },
  {
    id: 3,
    name: "Test name",
  },
  {
    id: 4,
    name: "Test name",
  },
];

const Friends = () => {
  return (
    <div>
      {DATA.map((friend) => (
        <Friend key={friend.id} name={friend.name} />
      ))}
    </div>
  );
};

export default Friends;

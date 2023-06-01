import React from "react";
import Group from "./Group";

const Groups = () => {
  return (
    <div>
      <span className="text-gray-600 text-base mb-1">Group conversations</span>
      <Group name="test group" />
    </div>
  );
};

export default Groups;

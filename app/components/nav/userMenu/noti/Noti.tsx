import React from "react";
import { IoIosNotifications } from "react-icons/io";

const Noti = ({ size }: { size: number }) => {
  return (
    <div
      className="
        bg-gray-200 h-10 w-10 flex items-center 
        justify-center rounded-full cursor-pointer hover:bg-gray-300
        transition-colors
      "
    >
      <IoIosNotifications size={size} />
    </div>
  );
};

export default Noti;

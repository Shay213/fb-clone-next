import React from "react";
import { AiFillMessage } from "react-icons/ai";

const Messenger = ({ size }: { size: number }) => {
  return (
    <div
      className="
        bg-gray-200 h-10 w-10 flex items-center 
        justify-center rounded-full cursor-pointer hover:bg-gray-300
        transition-colors        
      "
    >
      <AiFillMessage size={size} />
    </div>
  );
};

export default Messenger;

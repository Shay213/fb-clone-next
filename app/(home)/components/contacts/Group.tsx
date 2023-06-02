import Image from "next/image";
import React from "react";

interface GroupProps {
  name: string;
  img?: string;
}

const Group = ({ name, img }: GroupProps) => {
  return (
    <div
      className="flex items-center gap-3 p-2 cursor-pointer 
    hover:bg-gray-300 transition rounded-md relative"
    >
      <Image
        src={img || "/avatar.jpeg"}
        alt="group"
        width={35}
        height={35}
        className="rounded-full object-cover"
      />
      <div className="w-2 h-2 rounded-full bg-green-500 absolute left-[35px] bottom-3"></div>

      <span className="text-sm text-gray-700">{name}</span>
    </div>
  );
};

export default Group;

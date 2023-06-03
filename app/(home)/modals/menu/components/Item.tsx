import React from "react";
import { IconType } from "react-icons";

interface ItemProps {
  icon: IconType;
  label: string;
  desc?: string;
}

const Item = ({ icon: Icon, label, desc }: ItemProps) => {
  return (
    <div className="flex gap-3 rounded-md hover:bg-gray-200 transition cursor-pointer p-2">
      <div className="p-[1px]">
        <Icon size={18} className="fill-gray-700" />
      </div>
      <div className="flex flex-col">
        <h4 className="text-sm text-gray-700">{label}</h4>
        <span className="text-xs text-gray-400">{desc}</span>
      </div>
    </div>
  );
};

export default Item;

import Image from "next/image";
import React from "react";

interface Item {
  id: number;
  img?: string;
  description: string;
  when: string;
  read: boolean;
}

interface NotiSectionProps {
  label: string;
  items: Item[];
}

const NotiSection = ({ label, items }: NotiSectionProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{label}</h3>
        <div
          className="
          flex justify-center items-center p-1 
          hover:bg-gray-200 cursor-pointer 
          transition text-blue-500 text-sm
          rounded-full
        "
        >
          See all
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="
                flex gap-2 p-2 items-center rounded-md
                hover:bg-gray-200 cursor-pointer transition
              "
          >
            <div>
              <Image
                src={item.img || "/avatar.jpeg"}
                alt="img"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-sm max-w-[320px]">
              <p>{item.description}</p>
              <span>{item.when}</span>
            </div>
            {!item.read && (
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotiSection;

import React from "react";
import { IconType } from "react-icons";
import Image from "next/image";

interface SidebarOptionProps {
  icon?: IconType;
  label?: string;
  size?: number;
  iconFill?: string;
  labelColor?: string;
  className?: string;
  userImageSrc?: string | null;
  userName?: string | null;
}

const SidebarOption = ({
  icon: Icon,
  label,
  size,
  iconFill,
  labelColor,
  className,
  userImageSrc,
  userName,
}: SidebarOptionProps) => {
  return (
    <div
      className={`
            flex items-center gap-4 px-2 py-3 cursor-pointer 
            hover:bg-gray-300 transition rounded-md
            dark:hover:bg-zinc-700
            ${className || ""}
          `}
    >
      {userName ? (
        <>
          <Image
            src={userImageSrc || "/avatar.jpeg"}
            alt="user"
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className={labelColor}>{userName}</span>
        </>
      ) : (
        <>
          {Icon && <Icon size={size || 28} className={iconFill} />}
          <span className={labelColor}>{label}</span>
        </>
      )}
    </div>
  );
};

export default SidebarOption;

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
  onClick?: () => void;
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
  onClick,
}: SidebarOptionProps) => {
  return (
    <div
      className={`
            flex items-center gap-4 px-2 py-3 cursor-pointer 
            hover:bg-gray-300 transition rounded-md
            ${className || ""}
          `}
      onClick={onClick}
    >
      {userName ? (
        <>
          <Image
            src={userImageSrc || "/avatar.jpeg"}
            alt="user"
            width={28}
            height={28}
          />
          <span className={labelColor || "text-gray-700"}>{userName}</span>
        </>
      ) : (
        <>
          {Icon && (
            <Icon size={size || 28} className={iconFill || "fill-blue-500"} />
          )}
          <span className={labelColor || "text-gray-700"}>{label}</span>
        </>
      )}
    </div>
  );
};

export default SidebarOption;

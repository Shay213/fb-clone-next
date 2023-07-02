import Link from "next/link";
import React from "react";
import SidebarOption from "./SidebarOption";

interface UserOptionProps {
  name?: string | null;
  id?: string | null;
  image?: string | null;
}

const UserOption = ({ name, image, id }: UserOptionProps) => {
  return (
    <Link href={`/profile/${id}`}>
      <SidebarOption
        userName={name}
        userImageSrc={image}
        labelColor="text-gray-700 dark:text-zinc-300"
      />
    </Link>
  );
};

export default UserOption;

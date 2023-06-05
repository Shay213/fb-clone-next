import React from "react";

import { BsImages, BsEmojiSmile } from "react-icons/bs";
import { FaUserTag } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { HiFlag } from "react-icons/hi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IconType } from "react-icons";

const ICON_STYLES = `
    flex justify-center items-center p-2 rounded-full
    cursor-pointer hover:bg-gray-200 transition
    dark:hover:bg-zinc-700
`;

interface AddToPostProps {
  setIsImageUploadOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Icon = ({
  icon: Icon,
  fill,
  onClick,
}: {
  icon: IconType;
  fill?: string;
  onClick?: () => void;
}) => (
  <div className={ICON_STYLES} onClick={onClick}>
    <Icon size={20} className={fill} />
  </div>
);

const AddToPost = ({ setIsImageUploadOpen }: AddToPostProps) => {
  return (
    <div
      className="
        flex justify-between items-center py-2 px-4 
        border-[1px] rounded-md border-gray-300 dark:border-zinc-700
      "
    >
      <span className="text-gray-900 dark:text-zinc-300 cursor-pointer">
        Add to your post
      </span>
      <div className="flex items-center gap-1">
        <Icon
          icon={BsImages}
          fill="fill-green-500"
          onClick={() => setIsImageUploadOpen((prev) => !prev)}
        />
        <Icon icon={BsEmojiSmile} fill="fill-blue-600" />
        <Icon icon={FaUserTag} fill="fill-amber-500" />
        <Icon icon={ImLocation2} fill="fill-red-500" />
        <Icon icon={HiFlag} fill="fill-sky-300" />
        <Icon
          icon={BiDotsHorizontalRounded}
          fill="fill-gray-700 dark:fill-zinc-700"
        />
      </div>
    </div>
  );
};

export default AddToPost;

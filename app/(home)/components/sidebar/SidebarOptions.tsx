import React from "react";
import SidebarOption from "./SidebarOption";
import { useSession } from "next-auth/react";
import { FaUserFriends, FaGlobeAmericas } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import {
  MdOutlineGroups2,
  MdCrisisAlert,
  MdPayment,
  MdOutlineAppShortcut,
} from "react-icons/md";
import { AiOutlineShop, AiFillFlag } from "react-icons/ai";
import { CiYoutube } from "react-icons/ci";
import { GiBackwardTime } from "react-icons/gi";
import { IoStatsChartSharp } from "react-icons/io5";
import {
  BsFillBookmarkFill,
  BsFillCalendar3EventFill,
  BsMegaphone,
  BsBox2Heart,
  BsMeta,
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
  BsArrowUpCircle,
  BsArrowDownCircle,
} from "react-icons/bs";
import { RiGamepadFill } from "react-icons/ri";
import { SiMessenger, SiNintendogamecube } from "react-icons/si";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import UserOption from "./UserOption";

const SIDEBAR_OPTIONS = [
  {
    name: "Friends",
    icon: FaUserFriends,
  },
  {
    name: "Feeds (Most Recent)",
    icon: CiViewTimeline,
  },
  {
    name: "Groups",
    icon: MdOutlineGroups2,
  },
  {
    name: "Marketplace",
    icon: AiOutlineShop,
  },
  {
    name: "Watch",
    icon: CiYoutube,
  },
  {
    name: "Memories",
    icon: GiBackwardTime,
  },
  {
    name: "Saved",
    icon: BsFillBookmarkFill,
  },
  {
    name: "Pages",
    icon: AiFillFlag,
  },
  {
    name: "Events",
    icon: BsFillCalendar3EventFill,
  },
  {
    name: "Ad Center",
    icon: BsMegaphone,
  },
  {
    name: "Ads Manager",
    icon: IoStatsChartSharp,
  },
  {
    name: "Climate Science Center",
    icon: FaGlobeAmericas,
  },
  {
    name: "Crisis response",
    icon: MdCrisisAlert,
  },
  {
    name: "Fundraisers",
    icon: BsBox2Heart,
  },
  {
    name: "Gaming Video",
    icon: SiNintendogamecube,
  },
  {
    name: "Messenger",
    icon: SiMessenger,
  },
  {
    name: "Meta Quest",
    icon: BsMeta,
  },
  {
    name: "Orders and payments",
    icon: MdPayment,
  },
  {
    name: "Play Games",
    icon: RiGamepadFill,
  },
];

const MAX_VISIBLE_ITEMS = 10;

const SidebarOptions = async () => {
  const showMore = false;
  const session = await getServerSession(authOptions);

  return (
    <div>
      <UserOption
        id={session?.user.id}
        name={session?.user.name}
        image={session?.user.image}
      />
      {SIDEBAR_OPTIONS.map(({ name, icon: Icon }, i) => (
        <SidebarOption
          key={name}
          icon={Icon}
          label={name}
          labelColor="text-gray-700 dark:text-zinc-300"
          iconFill="fill-slate-600 dark:fill-zinc-300"
          className={!showMore && i >= MAX_VISIBLE_ITEMS ? "hidden" : "flex"}
        />
      ))}
      <SidebarOption
        icon={showMore ? BsArrowUpCircle : BsArrowDownCircle}
        label="See more"
        labelColor="text-gray-700 dark:text-zinc-300"
        iconFill="fill-slate-600 dark:fill-zinc-300"
      />
    </div>
  );
};

export default SidebarOptions;

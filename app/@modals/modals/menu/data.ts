import {
  FaUserFriends,
  FaGlobeAmericas,
  FaStar,
  FaFlag,
  FaShoppingBag,
} from "react-icons/fa";
import { CiViewTimeline, CiMemoPad } from "react-icons/ci";
import {
  MdOutlineGroups2,
  MdCrisisAlert,
  MdPayment,
  MdEvent,
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
  BsBook,
  BsFillHouseHeartFill,
} from "react-icons/bs";
import { RiGamepadFill } from "react-icons/ri";
import { SiNintendogamecube } from "react-icons/si";
import { BiMoviePlay } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";

export const MENU_PANEL_ITEMS = {
  social: {
    items: [
      {
        name: "Events",
        desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        icon: BsFillCalendar3EventFill,
      },
      {
        name: "Friends",
        desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        icon: FaUserFriends,
      },
      {
        name: "Groups",
        desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
        icon: MdOutlineGroups2,
      },
      {
        name: "News Feed",
        desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
        icon: CiViewTimeline,
      },
      {
        name: "Feeds (Most Recent)",
        desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        icon: CiViewTimeline,
      },
      {
        name: "Pages",
        desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
        icon: AiFillFlag,
      },
    ],
  },
  entertainment: {
    items: [
      {
        name: "Gaming Video",
        desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        icon: SiNintendogamecube,
      },
      {
        name: "Play Games",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        icon: RiGamepadFill,
      },
      {
        name: "Watch",
        desc: "lorem ipsum lorem ipsum",
        icon: CiYoutube,
      },
    ],
  },
  shopping: {
    items: [
      {
        name: "Orders and payments",
        desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        icon: MdPayment,
      },
      {
        name: "Marketplace",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        icon: AiOutlineShop,
      },
    ],
  },
  personal: {
    items: [
      {
        name: "Memories",
        desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        icon: GiBackwardTime,
      },
      {
        name: "Saved",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        icon: BsFillBookmarkFill,
      },
    ],
  },
  professional: {
    items: [
      {
        name: "Ads Manager",
        desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        icon: IoStatsChartSharp,
      },
      {
        name: "Ad Center",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        icon: BsMegaphone,
      },
    ],
  },
  community: {
    items: [
      {
        name: "Climate Science Center",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        icon: FaGlobeAmericas,
      },
      {
        name: "Crisis response",
        desc: "lorem ipsum lorem ipsum",
        icon: MdCrisisAlert,
      },
      {
        name: "Fundraisers",
        desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        icon: BsBox2Heart,
      },
    ],
  },
  more: {
    items: [
      {
        name: "Meta Quest",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        icon: BsMeta,
      },
    ],
  },
};

export const CREATE_SECTION_ITEMS = [
  {
    name: "post",
    icon: CiMemoPad,
  },
  {
    name: "story",
    icon: BsBook,
  },
  {
    name: "reel",
    icon: BiMoviePlay,
  },
  {
    name: "life event",
    icon: FaStar,
  },
  {
    name: "page",
    icon: FaFlag,
  },
  {
    name: "ad",
    icon: BsMegaphone,
  },
  {
    name: "group",
    icon: HiUserGroup,
  },
  {
    name: "event",
    icon: MdEvent,
  },
  {
    name: "marketplace listing",
    icon: FaShoppingBag,
  },
  {
    name: "fundraiser",
    icon: BsFillHouseHeartFill,
  },
];

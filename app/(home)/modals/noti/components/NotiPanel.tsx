import React from "react";
import Heading from "./Heading";
import Options from "./Options";
import NotiSection from "./NotiSection";

const NEWNOTI = [
  {
    id: 1,
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    when: "9h",
    read: false,
  },
  {
    id: 2,
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
    when: "9h",
    read: false,
  },
];

const EARLIERNOTI = [
  {
    id: 1,
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
    when: "9h",
    read: false,
  },
  {
    id: 2,
    description: "lorem ipsum lorem ipsum lorem ipsum",
    when: "9h",
    read: true,
  },
  {
    id: 3,
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    when: "9h",
    read: true,
  },
];

const NotiPanel = () => {
  return (
    <div
      className="
        bg-slate-50 dark:bg-zinc-800 py-4 px-5 rounded-md shadow-sm border-[1px] 
        border-gray-200 dark:border-none animate-slideInRightToLeft
        flex flex-col gap-3 min-w-[250px]
        "
    >
      <Heading />
      <Options />
      <NotiSection label="New" items={NEWNOTI} />
      <NotiSection label="Earlier" items={EARLIERNOTI} />
    </div>
  );
};

export default NotiPanel;

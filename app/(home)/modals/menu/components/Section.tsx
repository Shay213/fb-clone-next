import React from "react";
import { IconType } from "react-icons";
import Item from "./Item";

interface SectionProps {
  label: string;
  items: {
    name: string;
    desc: string;
    icon: IconType;
  }[];
}

const Section = ({ label, items }: SectionProps) => {
  return (
    <div>
      <h3 className="mb-3 first-letter:uppercase dark:text-zinc-200">
        {label}
      </h3>
      <div className="flex flex-col gap-3">
        {items.map((el) => (
          <Item key={el.name} label={el.name} desc={el.desc} icon={el.icon} />
        ))}
      </div>
    </div>
  );
};

export default Section;

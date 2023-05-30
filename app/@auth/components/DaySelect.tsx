import React from "react";

interface DaySelectProps {
  className?: string;
}

const DaySelect = ({ className = "" }: DaySelectProps) => {
  return (
    <select className={`outline-none bg-white border-[1px] ${className}`}>
      {Array(31)
        .fill(0)
        .map((el, i) => (
          <option value={i + 1} key={i + 1}>
            {i + 1}
          </option>
        ))}
    </select>
  );
};

export default DaySelect;

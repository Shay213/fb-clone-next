import React, { ChangeEvent } from "react";

interface DaySelectProps {
  className?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const DaySelect = ({ className = "", onChange, value }: DaySelectProps) => {
  return (
    <select
      className={`outline-none bg-white border-[1px] ${className}`}
      onChange={onChange || undefined}
      value={value}
    >
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

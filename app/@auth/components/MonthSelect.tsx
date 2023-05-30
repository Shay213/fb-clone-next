import React, { ChangeEvent } from "react";

interface MonthSelectProps {
  className?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const MonthSelect = ({ className = "", onChange, value }: MonthSelectProps) => {
  return (
    <select
      className={`outline-none bg-white border-[1px] ${className}`}
      onChange={onChange || undefined}
      value={value}
    >
      <option value="0">Jan</option>
      <option value="1">Feb</option>
      <option value="2">Mar</option>
      <option value="3">Apr</option>
      <option value="4">May</option>
      <option value="5">Jun</option>
      <option value="6">Jul</option>
      <option value="7">Aug</option>
      <option value="8">Sep</option>
      <option value="9">Oct</option>
      <option value="10">Nov</option>
      <option value="11">Dec</option>
    </select>
  );
};

export default MonthSelect;

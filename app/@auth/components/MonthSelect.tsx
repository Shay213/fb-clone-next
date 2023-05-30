import React from "react";

interface MonthSelectProps {
  className?: string;
}

const MonthSelect = ({ className = "" }: MonthSelectProps) => {
  return (
    <select className={`outline-none bg-white border-[1px] ${className}`}>
      <option value="Jan">Jan</option>
      <option value="Feb">Feb</option>
      <option value="Mar">Mar</option>
      <option value="Apr">Apr</option>
      <option value="May">May</option>
      <option value="Jun">Jun</option>
      <option value="Jul">Jul</option>
      <option value="Sep">Sep</option>
      <option value="Oct">Oct</option>
      <option value="Nov">Nov</option>
      <option value="Dec">Dec</option>
    </select>
  );
};

export default MonthSelect;

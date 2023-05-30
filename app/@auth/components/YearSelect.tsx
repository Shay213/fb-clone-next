"use client";

import React, { ChangeEvent, useMemo } from "react";

interface YearSelectProps {
  className?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const START_YEAR = 1905;

const YearSelect = ({ className = "", onChange, value }: YearSelectProps) => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const difference = useMemo(
    () => currentYear - START_YEAR,
    [currentYear, START_YEAR]
  );

  return (
    <select
      className={`outline-none bg-white border-[1px] ${className}`}
      onChange={onChange || undefined}
      value={value}
    >
      {Array(difference)
        .fill(0)
        .map((el, i) => (
          <option value={i + 1 + START_YEAR} key={i + 1 + START_YEAR}>
            {i + 1 + START_YEAR}
          </option>
        ))}
    </select>
  );
};

export default YearSelect;

import React from "react";

interface HeadingProps {
  label: string;
  subLabel?: string;
}

const Heading = ({ label, subLabel }: HeadingProps) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">{label}</h1>
      {subLabel && <span className="font-sm text-gray-600">{subLabel}</span>}
    </div>
  );
};

export default Heading;

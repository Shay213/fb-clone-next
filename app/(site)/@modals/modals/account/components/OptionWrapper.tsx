"use client";

import React, { useCallback, useState } from "react";
import { OPTIONS_LABELS } from "./Options";
import ThemeBox from "./theme/ThemeBox";
import { signOut } from "next-auth/react";

interface OptionWrapperProps {
  children: React.ReactNode;
  name: OPTIONS_LABELS;
}

const OptionWrapper = ({ children, name }: OptionWrapperProps) => {
  const [isOpen, setIsOpen] = useState({
    display: false,
  });

  const handleClick = () => {
    if (name === OPTIONS_LABELS.DISPLAY) {
      setIsOpen((prev) => ({ ...prev, display: !prev.display }));
    }
    if (name === OPTIONS_LABELS.LOGOUT) {
      signOut();
    }
  };

  return (
    <div className="relative" onClick={handleClick}>
      {children}
      {isOpen.display && <ThemeBox />}
    </div>
  );
};

export default OptionWrapper;

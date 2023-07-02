"use client";

import React from "react";
import { Option, useCurrentOptionContext } from "./Wrapper";

const Content = ({
  match,
  children,
}: {
  match: Option;
  children: React.ReactNode;
}) => {
  const currentOption = useCurrentOptionContext();
  return <>{currentOption === match && children}</>;
};

export default Content;

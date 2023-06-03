"use client";

import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";
import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  const homeModalsContext = useHomeModalsContext();
  if (!homeModalsContext) return null;

  return <>{homeModalsContext.menu.isOpen && children}</>;
};

export default Container;

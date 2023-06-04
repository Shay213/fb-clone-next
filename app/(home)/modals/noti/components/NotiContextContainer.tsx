"use client";

import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";
import React from "react";

const NotiContextContainer = ({ children }: { children: React.ReactNode }) => {
  const homeModalsContext = useHomeModalsContext();

  if (!homeModalsContext) return null;

  return <>{homeModalsContext.noti.isOpen && children}</>;
};

export default NotiContextContainer;

"use client";

import { useModalsContext } from "@/app/providers/ModalsProvider";
import React from "react";

const NotiContextContainer = ({ children }: { children: React.ReactNode }) => {
  const modalsContext = useModalsContext();

  if (!modalsContext) return null;

  return <>{modalsContext.noti.isOpen && children}</>;
};

export default NotiContextContainer;

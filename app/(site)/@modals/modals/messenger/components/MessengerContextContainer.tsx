"use client";

import { useModalsContext } from "@/app/providers/ModalsProvider";
import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  const modalsContext = useModalsContext();
  if (!modalsContext) return null;

  return <>{modalsContext.messenger.isOpen && children}</>;
};

export default Container;

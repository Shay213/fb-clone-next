"use client";

import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";
import React from "react";

const AccountContextContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const homeModalsContext = useHomeModalsContext();
  if (!homeModalsContext) return null;

  return <>{homeModalsContext.account.isOpen && children}</>;
};

export default AccountContextContainer;

"use client";

import { useModalsContext } from "@/app/providers/ModalsProvider";
import React from "react";

const AccountContextContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const modalsContext = useModalsContext();
  if (!modalsContext) return null;

  return <>{modalsContext.account.isOpen && children}</>;
};

export default AccountContextContainer;

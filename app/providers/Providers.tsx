"use client";

import HomeModalsProvider from "./HomeModalsProvider";
import ThemeProvider from "./ThemeProvider";
import ToasterProvider from "./ToasterProvider";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ThemeProvider>
        <HomeModalsProvider>{children}</HomeModalsProvider>
        <ToasterProvider />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;

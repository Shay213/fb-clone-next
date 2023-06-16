"use client";

import HomeModalsProvider from "./HomeModalsProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import ThemeProvider from "./ThemeProvider";
import ToasterProvider from "./ToasterProvider";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ReactQueryProvider>
        <ThemeProvider>
          <HomeModalsProvider>{children}</HomeModalsProvider>
          <ToasterProvider />
        </ThemeProvider>
      </ReactQueryProvider>
    </SessionProvider>
  );
};

export default Providers;

"use client";

import ThemeProvider from "./ThemeProvider";
import ToasterProvider from "./ToasterProvider";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ThemeProvider>
        {children}
        <ToasterProvider />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;

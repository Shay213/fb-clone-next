"use client";

import ModalsProvider from "./ModalsProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import ThemeProvider from "./ThemeProvider";
import ToasterProvider from "./ToasterProvider";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ReactQueryProvider>
        <ThemeProvider>
          <ModalsProvider>{children}</ModalsProvider>
          <ToasterProvider />
        </ThemeProvider>
      </ReactQueryProvider>
    </SessionProvider>
  );
};

export default Providers;

"use client";

import ThemeProvider from "./ThemeProvider";
import ToasterProvider from "./ToasterProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      {children}
      <ToasterProvider />
    </ThemeProvider>
  );
};

export default Providers;

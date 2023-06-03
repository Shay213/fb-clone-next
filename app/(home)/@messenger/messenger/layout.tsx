import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
      absolute top-0 right-0 bg-transparent p-2 z-50 
      max-h-[calc(100vh-160px)] h-[calc(100vh-160px)]
    "
    >
      {children}
    </div>
  );
};

export default Layout;

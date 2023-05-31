import React from "react";
import Nav from "./components/Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;

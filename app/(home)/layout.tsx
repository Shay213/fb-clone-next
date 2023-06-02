import React from "react";
import Sidebar from "./components/sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between bg-[#E9EEF0]">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;

import React from "react";
import Sidebar from "./components/sidebar/Sidebar";

const Layout = ({
  children,
  feed,
  contacts,
  messenger,
}: {
  children: React.ReactNode;
  feed: React.ReactNode;
  contacts: React.ReactNode;
  messenger: React.ReactNode;
}) => {
  return (
    <div className="flex justify-between bg-[#E9EEF0] relative">
      <Sidebar />
      {feed}
      {contacts}
      {messenger}
      {children}
    </div>
  );
};

export default Layout;

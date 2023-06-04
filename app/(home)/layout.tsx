import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import MenuModal from "./modals/menu/MenuModal";
import MessengerModal from "./modals/messenger/MessengerModal";
import NotiModal from "./modals/noti/NotiModal";

const Layout = ({
  children,
  feed,
  contacts,
}: {
  children: React.ReactNode;
  feed: React.ReactNode;
  contacts: React.ReactNode;
}) => {
  return (
    <div className="flex justify-between bg-[#E9EEF0] relative">
      <Sidebar />
      {feed}
      {contacts}
      {children}
      <MessengerModal />
      <MenuModal />
      <NotiModal />
    </div>
  );
};

export default Layout;

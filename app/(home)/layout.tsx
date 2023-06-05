import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import MenuModal from "./modals/menu/MenuModal";
import MessengerModal from "./modals/messenger/MessengerModal";
import NotiModal from "./modals/noti/NotiModal";
import AccountModal from "./modals/account/AccountModal";
import AddPostModal from "./modals/addPost/AddPostModal";

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
    <div className="flex justify-between bg-[#E9EEF0] dark:bg-zinc-900 relative">
      <Sidebar />
      {feed}
      {contacts}
      {children}
      <MessengerModal />
      <MenuModal />
      <NotiModal />
      <AccountModal />
    </div>
  );
};

export default Layout;

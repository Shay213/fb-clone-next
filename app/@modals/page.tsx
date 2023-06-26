import React from "react";
import AddPostModal from "./modals/addPost/AddPostModal";
import ConversationModal from "./modals/conversation/ConversationModal";
import NotiModal from "./modals/noti/NotiModal";
import MessengerModal from "./modals/messenger/MessengerModal";
import MenuModal from "./modals/menu/MenuModal";
import AccountModal from "./modals/account/AccountModal";

const Modals = () => {
  return (
    <>
      <AddPostModal />
      <AccountModal />
      <MenuModal />
      <NotiModal />
      <MessengerModal />
      <ConversationModal />
    </>
  );
};

export default Modals;

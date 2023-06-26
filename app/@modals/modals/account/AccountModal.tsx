import React from "react";
import AccountContextContainer from "./components/AccountContextContainer";
import AccountPanel from "./components/AccountPanel";

const AccountModal = () => {
  return (
    <AccountContextContainer>
      <AccountPanel />
    </AccountContextContainer>
  );
};

export default AccountModal;

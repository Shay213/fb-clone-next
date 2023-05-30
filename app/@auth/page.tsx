import React from "react";
import LoginModal from "./modals/LoginModal";
import Logo from "./components/Logo";

const Auth = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center gap-24 bg-gray-100">
      <Logo showSubText />
      <LoginModal />
    </div>
  );
};

export default Auth;

import React from "react";
import Logo from "../components/Logo";
import LoginModal from "../modals/LoginModal";

const Login = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-gray-100 ">
      <div className="flex-1 xsm:flex-none flex flex-col gap-5 lg:gap-24 lg:flex-row">
        <Logo showSubText />
        <LoginModal />
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import Logo from "../components/Logo";
import LoginModal from "../modals/LoginModal";

const Login = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center gap-24 bg-gray-100">
      <Logo showSubText />
      <LoginModal />
    </div>
  );
};

export default Login;

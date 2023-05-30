import React from "react";
import RegisterModal from "../modals/RegisterModal";
import Logo from "../components/Logo";

const Register = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center gap-7 bg-gray-100">
      <Logo />
      <RegisterModal />
    </div>
  );
};

export default Register;

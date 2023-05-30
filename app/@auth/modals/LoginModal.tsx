import React from "react";
import Input from "../components/Input";
import Link from "next/link";

const LoginModal = () => {
  return (
    <div className="bg-white p-5 shadow-xl text-center rounded-lg flex flex-col gap-5 w-96">
      <h1 className="pb-2 text-lg">Log Into Coolname</h1>
      <Input labelText="Email" errorMessage="" />
      <Input labelText="Password" errorMessage="" />
      <button className="bg-blue-600 text-white rounded-lg py-2 text-lg font-semibold">
        Log In
      </button>
      <hr />
      <Link href="/register" className="w-max self-center">
        <button className="bg-green-500 text-white rounded-lg px-5 py-2 font-semibold">
          Create new account
        </button>
      </Link>
    </div>
  );
};

export default LoginModal;

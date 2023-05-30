import React from "react";
import Input from "../components/Input";
import Link from "next/link";
import Heading from "../components/Heading";
import MonthSelect from "../components/MonthSelect";
import DaySelect from "../components/DaySelect";
import YearSelect from "../components/YearSelect";

enum GENDER {
  MALE = "male",
  FEMALE = "female",
}

const RegisterModal = () => {
  return (
    <div className="bg-white p-5 shadow-xl text-center rounded-lg flex flex-col gap-5 w-96">
      <Heading label="Create a new account" subLabel="It's quick and easy." />
      <hr />
      <div className="flex gap-3">
        <Input labelText="First Name" errorMessage="" />
        <Input labelText="Last Name" errorMessage="" />
      </div>
      <Input labelText="Email" errorMessage="" />
      <Input labelText="Password" errorMessage="" />

      <div className="text-left">
        <span className="text-sm">Birthday</span>
        <div className="flex gap-2">
          <MonthSelect className="flex-1" />
          <DaySelect className="flex-1" />
          <YearSelect className="flex-1" />
        </div>
      </div>

      <div className="text-left">
        <span className="text-sm">Gender</span>
        <div className="flex gap-2">
          <div className="flex items-center px-4 border border-gray-200 rounded">
            <input
              id={GENDER.MALE}
              type="radio"
              value={GENDER.MALE}
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor={GENDER.MALE}
              className="w-full py-2 ml-2 text-sm font-medium text-gray-700"
            >
              {GENDER.MALE}
            </label>
          </div>
          <div className="flex items-center px-4 border border-gray-200 rounded">
            <input
              id={GENDER.FEMALE}
              type="radio"
              value={GENDER.FEMALE}
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor={GENDER.FEMALE}
              className="w-full py-2 ml-2 text-sm font-medium text-gray-700"
            >
              {GENDER.FEMALE}
            </label>
          </div>
        </div>
      </div>

      <button className="bg-green-500 text-white rounded-lg py-2 text-lg font-semibold">
        Sign Up
      </button>
      <Link href="/login" className="w-max self-center text-blue-500">
        Already have an account?
      </Link>
    </div>
  );
};

export default RegisterModal;

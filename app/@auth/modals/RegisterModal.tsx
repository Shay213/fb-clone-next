"use client";

import React, { useCallback, useState } from "react";
import Input from "../components/Input";
import Link from "next/link";
import Heading from "../components/Heading";
import MonthSelect from "../components/MonthSelect";
import DaySelect from "../components/DaySelect";
import YearSelect from "../components/YearSelect";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";

enum GENDER {
  MALE = "male",
  FEMALE = "female",
}
type Birthday = {
  day: string;
  month: string;
  year: string;
};

const DEFAULT_BIRTHDAY = new Date(1990, 0, 1);

const schema = yup
  .object({
    "first name": yup.string().required().trim(),
    "last name": yup.string().required().trim(),
    email: yup.string().email().required().trim(),
    password: yup.string().required().trim(),
    gender: yup.string().oneOf(["male", "female"]).required().trim(),
    birthday: yup.date().required().default(DEFAULT_BIRTHDAY),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const RegisterModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    setValue,
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const [birthday, setBirthday] = useState<Birthday>({
    day: "1",
    month: "0",
    year: "1990",
  });

  const onSubmit: SubmitHandler<FormData> = useCallback((data) => {
    console.log(data);
    reset();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white p-5 shadow-xl text-center rounded-lg flex flex-col gap-5 w-full md:w-[500px]">
        <Heading label="Create a new account" subLabel="It's quick and easy." />
        <hr />
        <div className="flex gap-3">
          <Input
            labelText="first name"
            errorMessage={errors["first name"]?.message}
            register={register}
          />
          <Input
            labelText="last name"
            errorMessage={errors["last name"]?.message}
            register={register}
          />
        </div>
        <Input
          labelText="email"
          errorMessage={errors.email?.message}
          register={register}
        />
        <Input
          labelText="password"
          errorMessage={errors.password?.message}
          register={register}
        />

        <div className="text-left">
          <span className="text-sm">Birthday</span>
          <div className="flex gap-2">
            <MonthSelect
              className="flex-1"
              onChange={(e) => {
                setBirthday((prev) => ({ ...prev, month: e.target.value }));
                setValue(
                  "birthday",
                  new Date(+birthday.year, +birthday.month, +birthday.day)
                );
              }}
              value={birthday.month}
            />
            <DaySelect
              className="flex-1"
              onChange={(e) => {
                setBirthday((prev) => ({ ...prev, day: e.target.value }));
                setValue(
                  "birthday",
                  new Date(+birthday.year, +birthday.month, +birthday.day)
                );
              }}
              value={birthday.day}
            />
            <YearSelect
              className="flex-1"
              onChange={(e) => {
                setBirthday((prev) => ({ ...prev, year: e.target.value }));
                setValue(
                  "birthday",
                  new Date(+birthday.year, +birthday.month, +birthday.day)
                );
              }}
              value={birthday.year}
            />
          </div>
          {errors.birthday?.message && (
            <span className="text-sm text-red-600">
              {errors.birthday?.message}
            </span>
          )}
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
                onChange={() => setValue("gender", GENDER.MALE)}
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
                onChange={() => setValue("gender", GENDER.FEMALE)}
              />
              <label
                htmlFor={GENDER.FEMALE}
                className="w-full py-2 ml-2 text-sm font-medium text-gray-700"
              >
                {GENDER.FEMALE}
              </label>
            </div>
          </div>
          {errors.gender?.message && (
            <span className="text-sm text-red-600">
              {errors.gender?.message}
            </span>
          )}
        </div>

        <button className="bg-green-500 text-white rounded-lg py-2 text-lg font-semibold">
          Sign Up
        </button>
        <Link href="/login" className="w-max self-center text-blue-500">
          Already have an account?
        </Link>
      </div>
    </form>
  );
};

export default RegisterModal;

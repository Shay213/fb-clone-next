"use client";

import React, { useCallback } from "react";
import Input from "../components/Input";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required().trim(),
    password: yup.string().required().trim(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const LoginModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = useCallback((data) => {
    console.log(data);
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white p-5 shadow-xl text-center rounded-lg flex flex-col gap-5 w-96">
        <h1 className="pb-2 text-lg">Log Into Coolname</h1>
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
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg py-2 text-lg font-semibold"
        >
          Log In
        </button>
        <hr />
        <Link href="/register" className="w-max self-center">
          <button className="bg-green-500 text-white rounded-lg px-5 py-2 font-semibold">
            Create new account
          </button>
        </Link>
      </div>
    </form>
  );
};

export default LoginModal;

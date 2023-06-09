import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  labelText: string;
  errorMessage?: string;
  register: UseFormRegister<any>;
}

const Input = ({ labelText, errorMessage, register }: InputProps) => {
  return (
    <div>
      <div className="relative">
        <input
          type="text"
          id={labelText}
          className={`px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 
              rounded-lg border-[1px] border-gray-300
              focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                errorMessage ? "border-red-600 focus:border-red-600" : ""
              }`}
          placeholder=" "
          {...register(labelText)}
        />
        <label
          htmlFor={labelText}
          className={`absolute text-sm text-gray-500 duration-300 transform first-letter:uppercase
            -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 
            peer-focus:text-blue-600 peer-placeholder-shown:scale-100 
            peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 
            peer-focus:scale-75 peer-focus:-translate-y-4 left-2 ${
              errorMessage ? "peer-focus:text-red-600 text-red-600" : ""
            }`}
        >
          {labelText}
        </label>
      </div>
      {errorMessage && (
        <span className="text-sm text-red-600">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;

"use client";

import { useMutation } from "@tanstack/react-query";
import React, { ChangeEventHandler } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import getUsers from "@/app/actions/getUsers";

interface SearchProps {
  isOpen: boolean;
  searchPhrase: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchPhrase: React.Dispatch<React.SetStateAction<string>>;
  setResults: React.Dispatch<React.SetStateAction<any[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<null | string>>;
}

export default React.forwardRef<any, SearchProps>(function Search(props, ref) {
  const {
    isOpen,
    setIsOpen,
    setSearchPhrase,
    searchPhrase,
    setResults,
    setIsLoading,
    setError,
  } = props;

  const mutation = useMutation({
    mutationFn: (searchPhrase: string) => {
      setIsLoading(true);
      return getUsers(searchPhrase);
    },
    onSuccess: (data) => {
      setResults(data);
      setError(null);
    },
    onError: () => {
      setError("Something went wrong");
    },
    onSettled: () => setIsLoading(false),
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchPhrase(e.target.value);
    mutation.mutate(e.target.value);
  };

  return (
    <div
      className="
        bg-gray-100 dark:bg-zinc-700 h-[35px] w-[35px] lg:w-[250px] 
        flex items-center lg:px-3 rounded-full z-[60]
      "
      onClick={() => setIsOpen(true)}
      ref={ref}
    >
      <div className="flex items-center justify-center gap-2 w-full h-full">
        <AiOutlineSearch
          className={`fill-gray-600 dark:fill-zinc-400 transition-all ${
            isOpen ? "opacity-0 scale-0" : "opacity-1 scale-100"
          }`}
          size={18}
        />
        <input
          type="text"
          placeholder="Search in Facebook"
          className={`
              bg-transparent placeholder:text-gray-500 dark:placeholder:text-zinc-400 w-full 
              dark:text-zinc-100 flex-1 placeholder:text-sm text-sm transition-all
              outline-none border-none hidden lg:block
              ${isOpen ? "-translate-x-5" : ""}
            `}
          onChange={handleChange}
          value={searchPhrase}
        />
      </div>
    </div>
  );
});

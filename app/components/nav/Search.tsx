"use client";

import { useMutation } from "@tanstack/react-query";
import React, { useCallback, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSession } from "next-auth/react";

interface SearchProps {
  isOpen: boolean;
  searchPhrase: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchPhrase: React.Dispatch<React.SetStateAction<string>>;
  setResults: React.Dispatch<React.SetStateAction<any[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default React.forwardRef<any, SearchProps>(function Search(props, ref) {
  const {
    isOpen,
    setIsOpen,
    setSearchPhrase,
    searchPhrase,
    setResults,
    setIsLoading,
  } = props;
  const { data: session } = useSession();

  /*const mutation = useMutation({
    mutationFn: ({ email, search }: { email: string; search: string }) =>
      getFriends(email, search),
    onSuccess: (data) => {
      setIsLoading(false);
      setResults(data);
    },
    onError: (err) => console.log(err),
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchPhrase(e.target.value);
      if (session?.user?.email && e.target.value?.length > 0) {
        setIsLoading(true);
        mutation.mutate({ email: session.user.email, search: e.target.value });
      }
    },
    [setSearchPhrase, session?.user?.email, mutation, setIsLoading]
  );*/

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
          onChange={() => {}}
          value={searchPhrase}
        />
      </div>
    </div>
  );
});

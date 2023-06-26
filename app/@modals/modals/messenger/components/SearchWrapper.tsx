"use client";

import React, { useCallback, useState } from "react";
import Search from "./Search";
import Image from "next/image";
import { useModalsContext } from "@/app/providers/ModalsProvider";
import { useSession } from "next-auth/react";

const SearchWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const modalsContext = useModalsContext();
  const { data: session } = useSession();

  /* const handleClick = useCallback(
    async (friendId: string) => {
      if (session?.user?.email) {
        try {
          const userId = await getUserId(session.user.email);
          modalsContext?.messenger.hide();
          modalsContext?.toggleConversationModal(userId, friendId);
        } catch (error) {
          console.log(error);
        }
      }
    },
    [modalsContext, session?.user?.email]
  );*/

  return (
    <>
      <Search
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        setResults={setResults}
        setIsLoading={setIsLoading}
        setIsError={setIsError}
      />
      {isSearching ? (
        isLoading ? (
          <div className="text-center">Loading...</div>
        ) : isError ? (
          <div className="text-center">Something went wrong</div>
        ) : (
          searchPhrase.length > 0 && (
            <div className="flex flex-col gap-3 rounded-md p-1 hover:bg-gray-200 transition cursor-pointer">
              {results.map((item) => (
                <div
                  className="flex items-center gap-2"
                  key={item.id}
                  onClick={() => () => {}}
                >
                  <Image
                    src={"/avatar.jpeg"}
                    alt="chat-image"
                    width={30}
                    height={30}
                    className="object-cover rounded-full"
                  />
                  <div>{`${item.firstName} ${item.lastName}`}</div>
                </div>
              ))}
            </div>
          )
        )
      ) : (
        children
      )}
    </>
  );
};

export default SearchWrapper;

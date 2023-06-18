"use client";

import React, { useCallback, useState } from "react";
import Search from "./Search";
import { Friend } from "@/app/actions/friends/getFriends";
import Image from "next/image";
import { useHomeModalsContext } from "@/app/providers/HomeModalsProvider";
import { useSession } from "next-auth/react";
import getUserId from "@/app/actions/user/getUserId";

const SearchWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [results, setResults] = useState<Friend[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const homeModalsContext = useHomeModalsContext();
  const { data: session } = useSession();

  const handleClick = useCallback(
    async (friendId: string) => {
      if (session?.user?.email) {
        try {
          const userId = await getUserId(session.user.email);
          homeModalsContext?.messenger.hide();
          homeModalsContext?.toggleConversationModal(userId, friendId);
        } catch (error) {
          console.log(error);
        }
      }
    },
    [homeModalsContext, session?.user?.email]
  );

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
                  onClick={() => handleClick(item.id)}
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

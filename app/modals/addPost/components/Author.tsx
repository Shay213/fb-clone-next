import React, { useCallback, useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { AUDIENCE } from "./Form";

interface AuthorProps {
  audience: AUDIENCE;
  setAudience: React.Dispatch<React.SetStateAction<AUDIENCE>>;
}

const Author = ({ audience, setAudience }: AuthorProps) => {
  const { data: session } = useSession();
  const [isAudienceBoxOpen, setIsAudienceBoxOpen] = useState(false);

  const audienceIterable = useMemo(() => Object.entries(AUDIENCE), []);

  return (
    <div className="flex gap-2 items-center">
      <Image
        src={session?.user?.image || "/avatar.jpeg"}
        alt="user-img"
        width={50}
        height={50}
        className="rounded-full object-cover cursor-pointer"
      />
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-gray-800 dark:text-zinc-200">
          {session?.user?.name}
        </span>
        <button
          type="button"
          className="
              px-2 py-1 bg-gray-200 dark:bg-zinc-700 
              text-gray-800 dark:text-zinc-300 text-sm
              rounded-md font-semibold first-letter:uppercase
              relative
            "
          onClick={() => setIsAudienceBoxOpen((prev) => !prev)}
        >
          {audience}
          {isAudienceBoxOpen && (
            <div
              className="
                absolute top-full left-0 flex flex-col w-max 
                bg-slate-50 shadow-md rounded-md gap-2 p-2 dark:bg-zinc-700
                border-[1px] border-gray-300 dark:border-none
              "
            >
              {audienceIterable.map(([key, val]) => (
                <div
                  key={key}
                  className={`
                    px-2 py-1 text-gray-800 dark:text-zinc-300 text-sm
                    rounded-md font-semibold first-letter:uppercase
                    hover:bg-gray-300 dark:hover:bg-zinc-600
                    cursor-pointer transition
                    ${val === audience ? "hidden" : ""}
                  `}
                  onClick={() => setAudience(val)}
                >
                  {val}
                </div>
              ))}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Author;

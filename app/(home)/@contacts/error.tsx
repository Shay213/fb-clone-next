"use client";

import React, { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    //Log the error to an error reporting service
    console.log(error);
  }, [error]);
  return (
    <div
      className="sticky top-[70px] h-[calc(100vh-70px)] pr-2 
    overflow-auto z-10 min-w-[180px] w-1/4 max-w-[280px]"
    >
      <h2>Something went wrong!</h2>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
};

export default Error;

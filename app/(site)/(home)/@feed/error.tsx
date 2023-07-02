"use client";

import React, { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    //Log the error to an error reporting service
    console.log(error);
  }, [error]);
  return (
    <div className="overflow-auto z-10 pt-4 px-4 min-w-[450px] w-1/2 max-w-2xl">
      <h2>Something went wrong!</h2>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
};

export default Error;

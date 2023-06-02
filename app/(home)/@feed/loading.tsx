import Loader from "@/app/components/Loader";
import React from "react";

const Loading = () => {
  return (
    <div className="overflow-auto z-10 pt-4 px-4 min-w-[450px] w-1/2 max-w-2xl">
      <Loader />
    </div>
  );
};

export default Loading;

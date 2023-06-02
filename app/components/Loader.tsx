"use client";

import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <InfinitySpin width="150px" color="rgb(59, 130, 246)" />
    </div>
  );
};

export default Loader;

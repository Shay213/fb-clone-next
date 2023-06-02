"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      src="fb.svg"
      alt="logo"
      width={45}
      height={45}
      onClick={() => router.push("/")}
      className="cursor-pointer"
    />
  );
};

export default Logo;

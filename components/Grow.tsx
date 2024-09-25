import React from "react";
import Image from "next/image";

export default function Grow() {
  return (
    <section className="flex justify-between items-center px-12 min-h-screen">
      <div className="w-[50%] relative mx-auto overflow-hidden h-[100vh] mt-[5%] rounded-lg shadow-lg shadow-[#B68D07]">
        <Image
          src="/images/consulting-1.png"
          fill
          alt=""
          className="absolute w-[100%] h-[100%] inset-0"
        />
      </div>
      <div className="w-[40%] relative">
        <h1 className="text-6xl font-bold">
          The more you grow, the stronger you become.
        </h1>
        <p className="text-base mt-[5%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}

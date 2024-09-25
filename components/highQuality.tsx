import React from "react";
import Image from "next/image";

export default function HighQuality() {
  return (
    <section className="px-4 lg:px-0">
      <div className="w-full flex justify-end">
        <h2 className="text-5xl p-4 font-bold lg:w-[50%] mb-[4%] text-center lg:text-left">
          High-Quality Medical Products for Professionals
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-around">
        <div className="relative mx-auto overflow-hidden w-full lg:w-2/5 rounded-lg shadow-md h-[500px] border">
          <Image
            src="/images/products-slide-1.png"
            fill
            alt=""
            className="absolute w-[100%] h-[100%] object-cover inset-0"
          />
        </div>
        <div className="w-full lg:w-[40%] flex flex-col justify-center gap-4">
          <div className="flex gap-8 text-2xl">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <span>01</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <span>02</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <span>03</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Durable</h3>
            <p className="w-[90%] mt-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

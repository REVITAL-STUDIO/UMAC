import React from "react";
import Image from "next/image";

export default function ProductIntro() {
  return (
    <section className="flex my-[5rem] justify-between">
      <div className="flex flex-col justify-center w-[50%] px-12">
        <h1 className="text-8xl font-semibold">Our Products</h1>
        <p className="text-base  mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/* <button className="bg-[#530099] text-white rounded-lg text-base shadow-lg px-6 py-3 w-fit mt-4">
          Explore Our Products
        </button> */}
      </div>
      <div className="grid grid-cols-2 grid-rows-2 h-[700px] gap-4 w-[50%] p-4">
        <div className=" col-span-1 rounded-lg relative mx-auto overflow-hidden border w-full shadow-lg">
          <Image
            src="/images/product-hero-1.jpg"
            fill
            alt="product image 1"
            className="absolute w-[100%] h-[100%] object-cover inset-0"
          />
        </div>

        <div className=" row-span-2 rounded-lg relative mx-auto overflow-hidden border w-full shadow-lg">
          <Image
            src="/images/product-hero-2.jpg"
            fill
            alt="product image 1"
            className="absolute w-[100%] h-[100%] object-cover inset-0"
          />
        </div>
        <div className=" col-span-1 rounded-lg relative mx-auto overflow-hidden border w-full shadow-lg">
          <Image
            src="/images/product-hero-3.jpg"
            fill
            alt="product image 1"
            className="absolute w-[100%] h-[100%] object-cover inset-0"
          />
        </div>
      </div>
    </section>
  );
}

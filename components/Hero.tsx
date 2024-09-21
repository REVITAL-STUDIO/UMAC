import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <section className="flex flex-col w-full p-4">
        <div className="relative bg-[url('/images/hero.png')] w-full h-[700px] overflow-hidden mx-auto flex flex-col justify-center px-4  bg-cover bg-center rounded-[1.3rem] ">
          <Image
            src="/images/hero.png"
            alt="hero"
            fill
            className="absolute inset-0 w-[100%] h-[100%] -z-10"
          />
          <h1 className="text-white text-4xl w-[50%] mb-2">
            Delivering High-End Diagnostics and Medical Solutions for Better
            Healthcare
          </h1>
          <p className="text-white text-lg font-thin ">
            At UMA, we leverage cutting-edge technology and strategic
            partnerships to improve patient outcomes.
          </p>
          <div className="flex gap-x-6 my-[2%]">
            <button className="bg-[#530099] text-white rounded-lg text-base shadow-lg p-4">
              About Us
            </button>
            <button className="bg-[#ffffff] text-black  border rounded-lg text-base shadow-lg p-4">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import Image from "next/image";

export default function Transform() {
  return (
    <section className="min-h-screen  p-4 my-[6%]">
      <div className="px-44 ">
      <h1 className="font-bold text-5xl  p-4 w-[100%]">Innovative Diagnostics</h1>

        <div className="flex items-center  justify-between mt-[4%]">
          <div className="px-4 flex flex-col">
            <p className="text-semibold text-3xl">
              Strong Industry Relationship
            </p>
            <span>
              We combine world-class scientific statistics, clinical data, and
              tools to deliver personalized healthcare solutions.
            </span>
            <button className="bg-[#530099] text-white w-fit mt-4 rounded-lg text-base shadow-lg px-6 py-3">
              Medical Products
            </button>
          </div>
          <div className="border w-1/2 h-[400px] rounded-lg relative mx-auto overflow-hidden shadow-md">
            <Image
              src="/images/transform-1.jpg"
              fill
              alt="strong industry relationship"
              className="absolute w-[100%] h-[100%] inset-0 object-cover"
            />
          </div>
        </div>
        <div className="flex items-center hap-x-4 justify-between">
          <div className="border w-1/2 h-[700px] rounded-lg relative mx-auto overflow-hidden">
            <Image
              src="/images/transform-2.jpg"
              fill
              alt="global reach"
              className="absolute w-[100%] h-[100%] inset-0 object-cover"
            />
          </div>
          <div className="px-4 flex flex-col">
            <p className="text-semibold text-3xl">Global Reach </p>
            <span>
              We combine world-class scientific statistics, clinical data, and
              tools to deliver personalized healthcare solutions.
            </span>
            <button className="bg-[#530099] text-white w-fit mt-4 rounded-lg text-base shadow-lg px-6 py-3">
              Consulting
            </button>
          </div>
        </div>
        <div className="flex items-center hap-x-4 justify-between">
          <div className="flex flex-col">
            <p className="text-semibold text-3xl">Extensive Product Range </p>
            <span>
              We combine world-class scientific statistics, clinical data, and
              tools to deliver personalized healthcare solutions.
            </span>
            <button className="bg-[#530099] text-white w-fit mt-4 rounded-lg text-base shadow-lg px-6 py-3">
              Retail
            </button>
          </div>
          <div className="border w-1/2 h-[400px] rounded-lg relative mx-auto overflow-hidden">
            <Image
              src="/images/transform-3.jpg"
              fill
              alt="global reach"
              className="absolute w-[100%] h-[100%] inset-0 object-cover"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

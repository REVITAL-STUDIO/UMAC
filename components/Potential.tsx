import Image from "next/image";
import React from "react";

export default function Potential() {
  return (
    <section className="w-full min-h-screen grid grid-cols-3 grid-row-3 px-16 gap-12">
      <div className=" col-span-1  row-span-2 flex flex-col justify-between px-4 border-black/20">
        <span className="font-bold text-lg text-left mb-[8%]">About UMAC</span>
        <div className="mb-[75%]">
          <div className="  py-[4%] w-full ">
            <h1 className="text-4xl   text-black/50 font-semibold">
              Connecting Care, Transforming Lives
            </h1>
          </div>
          <div className=" w-full py-[4%] ">
            <h1 className="text-4xl   text-black/50 font-semibold">
              Advancing Medical Solutions Worldwide{" "}
            </h1>
          </div>
          <div className=" w-full py-[4%] ">
            <h1 className="text-4xl   text-black/50 font-semibold">
              Our Commitment to Quality{" "}
            </h1>
          </div>
        </div>
        <span className="text-xl font-medium">
          By partnering with us, healthcare professionals gain access to
          cutting-edge diagnostics, personalized treatment plans, and
          world-class education.
        </span>
      </div>
      <div className="h-[100%] w-[75%] col-span-2 mx-auto  row-span-2 rounded-lg relative overflow-hidden">
        <Image
          src="/images/pexels-cedric-fauntleroy-4269270.jpg"
          alt="medical business"
          fill
          className="w-[100%] h-[100%] absolute inset-0 "
        />
      </div>
    </section>
  );
}

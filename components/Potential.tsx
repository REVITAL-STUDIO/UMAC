import Image from "next/image";
import React from "react";

export default function Potential() {
  return (
    <section className="w-full min-h-screen grid xl:grid-cols-3 xl:grid-row-3 xl:px-16 gap-12 my-4">
      <div className=" col-span-1 xl:order-1 order-2  row-span-2 flex flex-col justify-between xl:px-4 px-8 border-black/20">
        <span className="font-bold text-lg text-left mb-[8%]">About UMAC</span>
        <div className="xl:mb-[75%] mb-[25%] xl:text-4xl text-2xl">
          <div className="  py-[4%] w-full ">
            <h1 className="   text-black/50 font-semibold">
              Connecting Care, Transforming Lives
            </h1>
          </div>
          <div className=" w-full py-[4%] ">
            <h1 className="   text-black/50 font-semibold">
              Advancing Medical Solutions Worldwide{" "}
            </h1>
          </div>
          <div className=" w-full py-[4%] ">
            <h1 className="   text-black/50 font-semibold">
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
      <div className="xl:h-[100%] h-[75vh] xl:w-[75%] w-[90%] col-span-2 mx-auto  row-span-2 xl:order-2 order-1 rounded-lg shadow-lg relative overflow-hidden">
        <Image
          src="/images/pexels-polina-tankilevitch-5469147.jpg"
          alt="medical business"
          fill
          className="w-[100%] h-[100%] absolute inset-0 object-cover"
        />
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";

export default function ConsultLast() {
  return (
    <section className=" flex justify-center items-center  my-8">
      <div className="w-[90%] h-[75vh] rounded-2xl flex font-alternate-gothic  text-white flex-col relative overflow-hidden transition justify-center mx-auto px-4 ">
        <video
          className="absolute inset-0 w-full h-[100%] object-cover z-[-1] "
          src="/images/consulting.mp4"
          autoPlay
          loop
          muted
        />{" "}
        <h1 className="xl:text-5xl w-1/2 text-2xl font-semibold z-10">
          Unlock Your Team's Full Potential with UMA Consulting
        </h1>
        <h3 className="z-10 mt-[1%] w-1/2 text-lg">
          Together, we’ll drive growth and empower your team to excel in today’s
          competitive landscape. Let’s work together to take your business to
          new heights.{" "}
        </h3>
        <button className="bg-[#530099] w-fit mt-4 text-white rounded-lg text-base shadow-lg px-6 py-3">
          Let's Talk
        </button>
      </div>
    </section>
  );
}

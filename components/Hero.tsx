import React from "react";
import Nav from "./Nav";

export default function Hero() {
  return (
    <div className="w-full h-screen relative ">
      <Nav />
      <video
        loop
        muted
        autoPlay
        src="/images/business-video.mp4"
        className="absolute inset-0 w-[100%] h-[100%] object-cover -z-10 brightness-50"
      />
      <div className="w-full h-3/4 flex flex-col  justify-center px-16">
        <h1 className="text-white font-semibold text-7xl w-[90%] mb-2">
          Delivering High-End Diagnostics and Medical Solutions for Better
          Healthcare
        </h1>
        <p className="text-white text-lg my-[2%] font-light ">
          At UMA, we leverage cutting-edge technology and strategic partnerships
          to improve patient outcomes.
        </p>
        <div className="flex gap-x-6 my-[2%]">
          <button className="bg-[#530099] text-white rounded-lg text-base shadow-lg px-6 py-3">
            About Us
          </button>
          <button className="bg-[#ffffff] text-black  border rounded-lg text-base shadow-lg px-6 py-3">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

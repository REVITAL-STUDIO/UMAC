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
        playsInline
        src="/images/business-video.mp4"
        className="absolute inset-0 w-[100%] h-[100%] object-cover -z-10 brightness-50"
      />
      <div className="w-full h-3/4 flex flex-col  justify-center xl:px-16 px-4">
        <h1 className="text-white font-semibold  md:text-5xl text-xl md:w-[50%] w-[90%] mb-2">
          Delivering High-End Diagnostics and Medical Solutions for Better
          Healthcare
        </h1>
        <p className="text-white text-base xl:my-0 my-[2%] md:w-1/2 font-light ">
          At UMA, we leverage cutting-edge technology and strategic partnerships
          to improve patient outcomes.
        </p>
      </div>
    </div>
  );
}

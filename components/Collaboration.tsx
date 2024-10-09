import React from "react";

export default function Collaboration() {
  return (
    <section className="w-full xl:px-16 xl:my-[8%] my-[16%] flex">
      <div className="xl:w-[50%] h-full flex flex-col justify-center">
        <span className="font-bold xl:text-lg text-base px-4 mb-6">
          Our Mission
        </span>
        <h1 className="xl:text-6xl text-3xl font-semibold px-4 mb-6 text-black">
          Transforming Healthcare Through Innovation and Collaboration
        </h1>
        <p className="text-lg px-4 text-black/50">
          At UMA, we are dedicated to revolutionizing healthcare by leveraging
          cutting-edge technology, strategic partnerships, and personalized
          treatment plans. Our mission is to improve clinical outcomes and
          patient safety through innovation and collaboration.
        </p>
      </div>
    </section>
  );
}

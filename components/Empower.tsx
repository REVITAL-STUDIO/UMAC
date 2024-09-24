import React from "react";

export default function Empower() {
  return (
    <section className="relative bg-[url('/images/products-footer.png')]  w-full h-[700px] overflow-hidden mx-auto flex flex-col justify-center p-16  bg-cover  ">
      <h2 className="font-bold text-3xl w-[50%] text-white">
        One Company, One Goal:
        <br></br>
        <span className="font-light text-xl">
          Empowering businesses through innovative products and tailored
          solutions.
        </span>
      </h2>
      <button className="bg-[#530099] text-white rounded-lg text-base shadow-lg px-6 py-3 mt-4 w-fit">
        Contact Us Today.
      </button>
    </section>
  );
}

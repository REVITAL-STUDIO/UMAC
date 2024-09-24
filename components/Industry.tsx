import React from "react";

export default function Industry() {
  return (
    <section className="my-[10rem] px-36">
      <h1 className="text-5xl font-semibold mb-4">Redefining The Industry</h1>
      <div className="flex gap-[3rem] justify-between">
        <p className="text-lg w-[50%]">
          Our Company provides you with the tools and products needed to enhance
          patient care and streamline medical processes.
        </p>
        <div className="flex flex-col gap-y-6 text-4xl relative ">
          <p>Gloves</p>
          <p>Testing Kits</p>
          <p>Wound Care</p>
          <p>Ancillary Supplies</p>
        </div>
      </div>
    </section>
  );
}

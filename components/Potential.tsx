import Image from "next/image";
import React from "react";

export default function Potential() {
  return (
    <section className="w-full min-h-screen grid grid-cols-3 grid-row-2 p-4 gap-4">
      <div className=" col-span-2 row-span-1 rounded-lg relative overflow-hidden flex items-center">
        <span className="text-4xl">
          Unlocking the Potential of Healthcare Professionals through Strategic
          Partnerships
        </span>
      </div>

      <div className=" col-span-1 row-span-2 rounded-lg flex flex-col justify-between">
        <div className="border-b  py-[4%] w-full border-black/20">
          <h1 className="text-2xl w-3/4 px-4 text-black/70 font-semibold">
            Connecting Care, Transforming Lives
          </h1>
          <p className="px-4 mt-4 font- text-black/50 ">
            Leverage our expertise to enhance clinical outcomes and improve
            patient safety.
          </p>
        </div>
        <div className="border-b w-full py-[4%] border-black/20">
          <h1 className="text-2xl w-3/4 px-4 text-black/70 font-semibold">
            Advancing Medical Solutions Worldwide{" "}
          </h1>
          <p className="px-4 mt-4 font-thin text-black/50 ">
            Stay ahead of the curve with our innovative solutions and
            cutting-edge technologies.
          </p>
        </div>
        <div className="border-b w-full py-[4%] border-black/20">
          <h1 className="text-2xl w-3/4 px-4 text-black/70 font-semibold">
            Our Commitment to Quality{" "}
          </h1>
          <p className="px-4 mt-4 font-thin text-black/50 ">
            Stay ahead of the curve with our innovative solutions and
            cutting-edge technologies.
          </p>
        </div>
      </div>
      <div className="bg-black col-span-2 row-span-1 rounded-lg relative overflow-hidden">
        <Image
          src="/images/home-pic-2.png"
          alt="medical business"
          fill
          className="w-[100%] h-[100%]"
        />
      </div>
    </section>
  );
}

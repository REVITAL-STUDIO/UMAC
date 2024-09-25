import React from "react";
import ConsultingPoint from "./ConsultingPoint";
import Image from "next/image";

export default function ConsultIntro() {
  return (
    <section className="min-h-screen flex  px-12">
      <div className="mt-[5%]">
        <div className="">
          <h1 className="text-5xl font-bold">
            Consulting for Growth and Success
          </h1>
          <p className="text-lg italic mt-[6%]">
            Empowering teams through personalized development programs.
          </p>
        </div>
        <div className=" grid grid-cols-2 grid-rows-2 mt-[90%]">
          <ConsultingPoint text="Tailored Corporate Training" />
          <ConsultingPoint text="Proven Results in Employee Engagement" />
          <ConsultingPoint text="Certified TypeCoach Expertise" />
          <ConsultingPoint text="Flexible, Scalable Solutions" />
        </div>
      </div>
      <section className="w-full flex justify-center items-center">
        <div className="relative w-[90%] h-[70%] mx-auto overflow-hidden mt-[5%] rounded-lg shadow-lg shadow-[#B68D07]">
          <Image
            src="/images/consulting-hero.jpg"
            fill
            alt=""
            className="absolute w-[100%] h-[100%] object-cover inset-0"
          />
        </div>
      </section>
    </section>
  );
}

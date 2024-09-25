import React from "react";
import ConsultingPoint from "./ConsultingPoint";
import Image from "next/image";


export default function ConsultIntro() {
  return (
    <section className="min-h-screen flex  px-12">
      <div className="mt-[5%] w-2/5 flex flex-col justify-center">
        <div className="px-4">
          <h1 className="text-5xl font-bold">
            Consulting for Growth and Success
          </h1>
          <p className="text-lg  mt-[6%]">
            UMA Consulting empowers teams through personalized development
            programs designed to enhance communication, improve collaboration,
            and unlock the full potential of your workforce. Our customized
            training solutions, led by certified experts, equip your team with
            the tools they need to thrive in today’s dynamic work environment.
            By fostering growth, engagement, and long-term success, we help
            businesses build stronger teams and create a more cohesive,
            productive workplace.{" "}
          </p>
        </div>
      </div>
      <section className="w-3/5 flex justify-center items-center px-4">
        <div className="relative w-[90%] h-[90%] mx-auto overflow-hidden mt-[5%] rounded-lg shadow-lg shadow-[#B68D07]">
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

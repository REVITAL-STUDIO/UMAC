import React from "react";
import Image from "next/image";

export default function Grow() {
  return (
    <section className="flex justify-between items-center px-16 min-h-screen my-[6%] ">
      <div className="w-[50%] relative mx-auto overflow-hidden h-[100vh] mt-[5%] rounded-lg shadow-lg shadow-[#B68D07]">
        <Image
          src="/images/consulting-1.png"
          fill
          alt=""
          className="absolute w-[100%] h-[100%] inset-0"
        />
      </div>
      <div className="w-[40%] relative">
        <h1 className="text-6xl font-bold">
          The more you grow, the stronger you become.
        </h1>
        <p className="text-lg text-justify mt-[5%]">
          We believe that growth is the foundation of success. The more
          individuals and teams grow, the stronger and more adaptable they
          become in the face of challenges. Our tailored consulting and training
          programs are designed to foster that growth, equipping your workforce
          with the skills and insights needed to excel. Whether through
          improving communication, enhancing collaboration, or developing
          leadership abilities, we help your team unlock its full
          potential—empowering your business to achieve greater strength and
          success.
        </p>
      </div>
    </section>
  );
}

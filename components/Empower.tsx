import Image from "next/image";
import React from "react";

export default function Empower() {
  return (
    <section className="relative   w-full h-[600px] overflow-hidden mx-auto my-4   bg-cover">
      <div className="p-4  w-[90%] relative h-full mx-auto overflow-hidden rounded-lg flex flex-col justify-center">
        <Image
          src="/images/pexels-tima-miroshnichenko-5452300.jpg"
          fill
          priority
          alt=""
          className="absolute w-[100%] h-[100%] object-cover z-[-1] brightness-90"
        />
        <h2 className="font-bold xl:text-7xl hidden xl:block w-full absolute text-center left-1/2 transform -translate-x-1/2  text-white/75">
          One Company, One Commitment:
        </h2>
      </div>
    </section>
  );
}

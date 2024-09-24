import React from "react";
import Image from "next/image";

export default function Solution() {
  return (
    <section className="flex  my-[10rem] items-center px-12">
      <h2 className="font-semibold text-2xl w-[25%]">
        Solutions You Can Rely On
      </h2>
      <div className="w-[75%] flex gap-x-8">
        <div className="flex  flex-col gap-y-6 ">
          <div className="relative mx-auto overflow-hidden w-[100%] h-[500px] rounded-lg">
            <Image
              src="/images/solutions-1.png"
              fill
              alt=""
              className="absolute w-[100%] h-[100%] inset-0"
            />
          </div>
          <h3 className="font-bold text-2xl">Create A Unified Community</h3>
          <p>
            With mParticle, HBO Max's marketing team is able to create audiences
            without engineering support and engage with their users more
            strategically.
          </p>
        </div>
        <div className="flex flex-col gap-y-6 ">
          <div className="relative mx-auto overflow-hidden w-[100%] h-[500px] rounded-lg">
            <Image
              src="/images/solutions-2.png"
              fill
              alt=""
              className="absolute w-[100%] h-[100%] inset-0"
            />
          </div>
          <h3 className="font-bold text-2xl">Acquisition Cost Lowered</h3>
          <p>
            With mParticle, HBO Max's marketing team is able to create audiences
            without engineering support and engage with their users more
            strategically.
          </p>
        </div>
        <div className="flex flex-col gap-y-6 ">
          <div className="relative mx-auto overflow-hidden w-[100%] h-[500px] rounded-lg">
            <Image
              src="/images/solutions-3.png"
              fill
              alt=""
              className="absolute w-[100%] h-[100%] inset-0"
            />
          </div>
          <h3 className="font-bold text-2xl">
            Enhance Operational Efficiencies
          </h3>
          <p>
            With mParticle, HBO Max's marketing team is able to create audiences
            without engineering support and engage with their users more
            strategically.
          </p>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

export default function Solution() {
  return (
    <section className="flex flex-col lg:flex-row  my-[10rem] items-center px-4 lg:px-12">
      <h2 className="font-semibold text-2xl w-full mb-12 text-center lg:text-left lg:mb-0 lg:w-[25%]">
        Solutions You Can Rely On
      </h2>
      <div className="w-full lg:w-[75%] flex flex-col lg:flex-row gap-x-8 ">
        <div className="flex  flex-col gap-y-6 flex-grow">
          <div className="relative mx-auto overflow-hidden w-[100%] h-[500px] rounded-lg">
            <Image
              src="/images/solutions-1.png"
              fill
              alt=""
              className="absolute w-[100%] h-[100%] inset-0"
            />
          </div>
          <h3 className="font-bold text-2xl"> Distributor for Healing BioLogix Post-Op Wound Care Program</h3>
          <p>
            We proudly supply top-tier products essential to the healthcare industry. Offering the Healing BioLogix Post-Op Wound Care Program,
            designed to ensure optimal recovery for post-surgery patients with cutting-edge wound care technology
          </p>
        </div>
        <div className="flex flex-col gap-y-6 flex-grow">
          <div className="relative mx-auto overflow-hidden w-[100%] h-[500px] rounded-lg">
            <Image
              src="/images/solutions-2.png"
              fill
              alt=""
              className="absolute w-[100%] h-[100%] inset-0"
            />
          </div>
          <h3 className="font-bold text-2xl">Premium Gini Foundation Nitrile Gloves</h3>
          <p>
            Along with these trusted brands, we offer a range of other medical essentials to ensure your clinic, hospital, or healthcare facility is
            always fully equipped and prepared to meet the demands of patient care.
          </p>
        </div>
        <div className="flex flex-col gap-y-6 flex-grow">
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
            we help you minimize waste, reduce costs, and
            ensure that essential medical supplies are always available when you
            need them. With our expertise, you can focus more on delivering
            exceptional patient care while we handle the logistics.
          </p>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

export default function Transform() {
  return (
    <section className="min-h-screen  p-4 my-[4%]">
      <div className="xl:px-24 mt-[6%] ">
        <h1 className="font-bold text-5xl w-[100%] p-4">
          Innovative Diagnostics
        </h1>

        <div className="flex flex-col xl:flex-row gap-x-4 mt-[5%] ">
          <div className=" flex flex-col gap-y-4 xl:w-1/2 px-4 my-4">
            <h1 className="font-semibold text-lg mb-4">
              Strong Industry Relationship
            </h1>
            <span className="text-base text font-light">
              We combine world-class scientific research, advanced statistical
              methodologies, and cutting-edge clinical data with
              state-of-the-art tools to create highly personalized and
              innovative healthcare solutions. Our approach integrates the
              latest developments in medical science, data analytics, and
              technology, ensuring that every patient receives tailored
              treatments and care plans that address their unique health needs.
            </span>
          </div>
          <div className="border xl:w-1/2 w-full h-[400px] rounded-lg relative mx-auto overflow-hidden shadow-md ">
            <Image
              src="/images/transform-1.jpg"
              fill
              alt="strong industry relationship"
              className="absolute w-[100%] h-[100%] inset-0 object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse xl:flex-row items-center gap-x-4 justify-between my-[15%] xl:my-[0%]">
          <div className="border xl:w-2/3 w-full h-[600px] rounded-lg relative mx-auto overflow-hidden mt-[8%]">
            <Image
              src="/images/transform-2.jpg"
              fill
              alt="global reach"
              className="absolute w-[100%] h-[100%] inset-0 object-cover"
            />
          </div>
          <div className="px-4 flex flex-col xl:w-1/2">
            <h1 className="font-semibold text-lg mb-4">Global Reach </h1>
            <span className="text-base text font-light">
              With a robust network of partners and distributors across the
              globe, we bring high-quality products and services to markets far
              and wide. Whether you&apos;re looking for durable goods,
              innovative retail solutions, or expert consulting, our global
              presence ensures that we can meet your needs wherever you are,
              delivering reliability and expertise at every step.
            </span>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-x-4 justify-between">
          <div className="flex flex-col px-4 xl:w-1/2">
            <h1 className="font-semibold text-lg mb-4">
              Extensive Product Range{" "}
            </h1>
            <span className="text-base text font-light">
              an extensive product range designed to meet diverse market needs.
              From durable goods and cutting-edge technology to everyday
              essentials, we provide a comprehensive selection tailored to
              various industries. Whether you&apos;re sourcing medical supplies,
              retail products, or specialized solutions, our diverse inventory
              ensures that you&apos;ll find the right products to support your
              business and customers effectively.
            </span>
          </div>
          <div className="border xl:w-1/2 w-full h-[400px] rounded-lg relative mx-auto overflow-hidden mt-[8%]">
            <Image
              src="/images/transform-3.jpg"
              fill
              alt="global reach"
              className="absolute w-[100%] h-[100%] inset-0 object-cover"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

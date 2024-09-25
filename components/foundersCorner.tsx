import React from "react";
import Image from "next/image";

export default function Founders() {
  return (
    <section className="xl:px-20 my-8">
      <span className=" text-3xl px-4">Our Founder</span>
      <h1 className="font-bold text-lg px-4">A Leader in Healthcare Innovation </h1>
      <div className="flex flex-col xl:flex-row justify-around items-center mt-[4rem] px-12">
        <Image
          src="/images/founder.png"
          width={650}
          height={650}
          alt="founder"
          className="rounded-[1rem]"
        />
        <p className="xl:p-20 xl:w-[50%] text-base text-justify my-[8%] xl:my-0">
          With over 30 years of pharmaceutical and medical sales experience,
          Terence Green has a distinguished track record in driving success
          across various healthcare sectors. A Xavier University of Louisiana
          graduate, Terence has excelled in recruiting, training, and leading
          sales teams, and has worked with a broad spectrum of healthcare
          providers. His extensive experience includes sales across national
          networks, specializing in therapeutic areas such as infectious
          diseases, neurology, and pain management.
        </p>
      </div>
    </section>
  );
}

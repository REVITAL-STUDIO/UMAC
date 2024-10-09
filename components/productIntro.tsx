import React from "react";
import Image from "next/image";

export default function ProductIntro() {
  return (
    <section className="flex flex-col-reverse lg:flex-row  justify-between mt-[10%] xl:mt-[0%] xl:px-8">
      <div className="flex flex-col justify-center w-full lg:w-[50%] xl:px-12 px-4 my-8">
        <h1 className="text-4xl lg:text-7xl font-semibold">Our Products</h1>
        <p className="text-base xl:my-4 my-[8%]">
          At UMALLC, we are dedicated to empowering healthcare providers with
          high-quality medical supplies and innovative solutions. With over 28
          years of global retail sales experience, our team understands the
          critical needs of clinics, hospitals, and healthcare facilities,
          ensuring we provide products that enhance safety and patient care.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 h-[700px] gap-4 w-full lg:w-[50%] p-4">
        <div className=" col-span-1 rounded-lg relative mx-auto overflow-hidden border w-full shadow-lg">
          <Image
            src="/images/product-hero-1.jpg"
            fill
            alt="product image 1"
            className="absolute w-[100%] h-[100%] object-cover inset-0"
          />
        </div>

        <div className=" row-span-2 rounded-lg relative mx-auto overflow-hidden border w-full shadow-lg">
          <Image
            src="/images/product-hero-2.jpg"
            fill
            alt="product image 1"
            className="absolute w-[100%] h-[100%] object-cover inset-0"
          />
        </div>
        <div className=" col-span-1 rounded-lg relative mx-auto overflow-hidden border w-full shadow-lg">
          <Image
            src="/images/product-hero-3.jpg"
            fill
            alt="product image 1"
            className="absolute w-[100%] h-[100%] object-cover inset-0"
          />
        </div>
      </div>
    </section>
  );
}

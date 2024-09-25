import React from "react";
import Image from "next/image";

export default function ProductGrid() {
  return (
    <section className="w-full min-h-[1500px] grid xl:grid-cols-3 xl:grid-rows-4 grid-cols-2 grid-rows-3 gap-4 p-4">
      <div className="bg-black col-span-1 border w-full row-span-2 rounded-lg relative mx-auto overflow-hidden">
        <Image
          src="/images/retailPic-1.jpg"
          fill
          alt=""
          className="absolute w-[100%] h-[100%] inset-0 object-cover"
        />
      </div>
      <div className="bg-black col-span-1 w-full row-span-1 rounded-lg relative mx-auto overflow-hidden">
        <Image
          src="/images/retailPic-2.jpg"
          fill
          alt=""
          className="absolute w-[100%] h-[100%] inset-0 object-cover"
        />
      </div>
      <div className="bg-black row-span-2 w-full rounded-lg relative mx-auto overflow-hidden">
        <Image
          src="/images/retailPic-3.jpg"
          fill
          alt=""
          className="absolute w-[100%] h-[100%]  inset-0 object-cover"
        />
      </div>
      <div className="bg-black row-span-1 w-full rounded-lg relative mx-auto overflow-hidden">
        <Image
          src="/images/retailPic-4.jpg"
          fill
          alt=""
          className="absolute w-[100%] h-[100%] inset-0 object-cover"
        />
      </div>
      <div className="bg-black w-full row-span-2 rounded-lg relative mx-auto overflow-hidden">
        <Image
          src="/images/retailPic-5.jpg"
          fill
          alt=""
          className="absolute w-[100%] h-[100%] inset-0 object-cover"
        />
      </div>
      <div className="bg-black col-span-[1.5] w-full row-span-1 rounded-lg relative mx-auto overflow-hidden">
        <Image
          src="/images/retailPic-6.jpg"
          fill
          alt=""
          className="absolute w-[100%] h-[100%] inset-0 object-cover"
        />
      </div>
      <div className="bg-black h-[300px] w-full rounded-lg relative mx-auto overflow-hidden">
        <Image
          src="/images/retailPic-7.jpg"
          fill
          alt=""
          className="absolute w-[100%] h-[100%] inset-0 object-cover"
        />
      </div>
    </section>
  );
}

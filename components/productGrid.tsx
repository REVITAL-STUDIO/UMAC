import React from "react";
import Image from "next/image";

export default function ProductGrid() {
  return (
    <section className="w-full min-h-[1000px] grid xl:grid-cols-3 xl:grid-rows-3 grid-cols-2 grid-rows-3 gap-4 p-4">
      <div className="bg-black col-span-1 border w-full row-span-2 rounded-lg relative mx-auto overflow-hidden shadow-md">
        <Image
          src="/images/JJB-Tiffany-Ad-2.webp"
          fill
          alt=""
          className="absolute w-[100%] h-[100%] inset-0 object-cover"
        />
      </div>
      <div className="bg-black col-span-1 w-full row-span-1 rounded-lg relative mx-auto overflow-hidden shadow-md">
        <Image
          src="/images/pexels-natallia-photo-311038782-15897784.jpg"
          fill
          alt=""
          className="absolute w-[100%] h-[100%] inset-0 object-cover"
        />
      </div>
      <div className="bg-black row-span-2 w-full rounded-lg relative mx-auto overflow-hidden shadow-md">
        <Image
          src="/images/pexels-kevin-malik-9016814.jpg"
          fill
          alt=""
          className="absolute w-[100%] h-[100%]  inset-0 object-cover"
        />
      </div>
      <div className="bg-black row-span-1 w-full rounded-lg relative mx-auto overflow-hidden shadow-md">
        <Image
          src="/images/pexels-kampus-7843952.jpg"
          fill
          alt=""
          className="absolute w-[100%] h-[100%] inset-0 object-cover"
        />
      </div>
      <div className="bg-black w-full row-span-2 rounded-lg relative mx-auto overflow-hidden shadow-md">
        <Image
          src="/images/pexels-jay-randhawa-368310811-15348499.jpg"
          fill
          alt=""
          className="absolute w-[100%] h-[100%] inset-0 object-cover"
        />
      </div>
      <div className="bg-black col-span-[1.5] h-[350px] w-full row-span-1 rounded-lg relative mx-auto overflow-hidden shadow-md">
        <Image
          src="/images/product_1main.jpg"
          fill
          alt=""
          className="absolute w-[100%] h-[100%] inset-0 object-cover"
        />
      </div>
      <div className="bg-black h-[300px] w-full rounded-lg relative mx-auto overflow-hidden shadow-md">
        <Image
          src="/images/pexels-jonathanborba-17820728.jpg"
          fill
          alt=""
          className="absolute w-[100%] h-[100%] inset-0 object-cover"
        />
      </div>
    </section>
  );
}

import React from "react";

export default function ProductGrid() {
  return (
    <section className="w-full min-h-[1500px] grid grid-cols-3 grid-rows-4 gap-4 p-4">
      <div className="bg-black col-span-1 row-span-2 rounded-lg"></div>
      <div className="bg-red-500 col-span-1 row-span-1 rounded-lg"></div>
      <div className="bg-blue-500 row-span-2 rounded-lg"></div>
      <div className="bg-green-500 row-span-1 rounded-lg"></div>
      <div className="bg-purple-500 row-span-2 rounded-lg"></div>
      <div className="bg-slate-500 col-span-[1.5] row-span-1 rounded-lg"></div>
      <div className="bg-orange-500 h-[300px] rounded-lg"></div>
      <div className="col-span-2 rounded-lg flex flex-col justify-center items-end">
        <h2 className="mt-[4%] text-6xl font-normal">Full Cycle Service</h2>
      </div>
    </section>
  );
}

import Image from "next/image";
import React from "react";
import EmblaCarouselRetail from "./emblaCarouselRetail";

export default function UMARetail() {
  const slide = [0, 1, 2, 3];

  return (
    <section className="w-full ">
      <div className="p-4 my-4 ">
        <h2 className="mt-[4%] xl:w-1/2 font-semibold text-4xl ">
          Hear from Our Clients{" "}
        </h2>
      </div>
      <div className="gap-x-4 flex items-center justify-center w-full p-4 h-full my-4">
        <EmblaCarouselRetail slides={slide} />
      </div>
    </section>
  );
}

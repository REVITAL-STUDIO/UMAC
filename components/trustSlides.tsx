import React from "react";
import EmblaCarousel from "./emblaCarousel";

function TrustSlides() {
  const slide = [0, 1, 2, 3];

  return (
    <section className="w-full my-8 ">
      <div className="w-full xl:flex justify-between mt-[8%] xl:px-16 px-8">
        <span className="font-bold text-lg text-left">Leaders</span>
        <h2 className="font-bold xl:text-5xl text-3xl xl:my-0 my-8 text-left ">
          Trusted by Leading Healthcare Providers
        </h2>
      </div>
      <div className="w-full flex items-center justify-center xl:justify-end mt-[4%]">
        <EmblaCarousel slides={slide} />
      </div>
    </section>
  );
}

export default TrustSlides;

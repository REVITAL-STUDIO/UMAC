import React from "react";
import EmblaCarousel from "./emblaCarousel";

function TrustSlides() {
  const slide = [0, 1, 2, 3];

  return (
    <section className="w-full  ">
      <div className="w-full flex justify-between mt-[8%] px-16">
        {" "}
        <span className="font-bold text-lg text-left">Leaders</span>
        <h2 className="font-bold text-5xl  text-left ">
          Trusted by Leading Healthcare Providers
        </h2>
      </div>
      <div className="w-full flex items-center justify-end mt-[4%]">
        <EmblaCarousel slides={slide} />
      </div>
    </section>
  );
}

export default TrustSlides;

"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarouselRetail: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla__retail">
      <div className="embla__viewport__retail" ref={emblaRef}>
        <div className="embla__container__retail">
          {slides.map((index) => (
            <div className="embla__slide__retail " key={index}>
              <div className="embla__slide__number__retail mx-auto cursor-pointer overflow-hidden bg-[#2b2b2b] shadow-lg shadow-[#B68D07] relative border">
                <div className="w-[8rem] h-[8rem]  rounded-full bg-white"></div>
                <span className="text-white text-lg my-4 font-normal">
                  FirstName LastName
                </span>
                <span className="text-white text-lg  font-normal">
                  Occupation
                </span>
                <span className="text-white text-sm font-light mt-4 p-4 text-center">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.&quot;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__progress__retail">
          <div
            className="embla__progress__bar__retail"
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarouselRetail;

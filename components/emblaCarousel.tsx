"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const ease = [0.16, 1, 0.3, 1] as const;

const photoGrid = [
  "/images/provider-1.jpg",
  "/images/provider-2.jpg",
  "/images/provider-3.jpg",
  "/images/provider-4.jpg",
];

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    loop: false,
    ...options,
  });

  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = useCallback((api: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, api.scrollProgress()));
    setScrollProgress(progress * 100);
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setActiveIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
    return () => {
      emblaApi.off("scroll", onScroll);
    };
  }, [emblaApi, onScroll]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Carousel viewport */}
      <div
        ref={emblaRef}
        className="overflow-hidden w-full cursor-grab active:cursor-grabbing"
      >
        <div className="flex gap-4 xl:gap-5 pl-6 xl:pl-20">
          {slides.map((index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={index}
                animate={{
                  opacity: isActive ? 1 : 0.55,
                  scale: isActive ? 1 : 0.97,
                }}
                transition={{ duration: 0.4, ease }}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden
                  w-[260px] h-[340px]
                  xl:w-[300px] xl:h-[380px]
                  shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              >
                <Image
                  src={photoGrid[index % photoGrid.length]}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                {/* Slide vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Slide number badge */}
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <span className="text-white text-[10px] font-semibold">
                    {index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
          {/* Right padding sentinel */}
          <div className="flex-shrink-0 w-6 xl:w-20" />
        </div>
      </div>

      {/* Controls row */}
      <div className="px-6 xl:px-20 flex items-center justify-between gap-6">
        {/* Progress bar */}
        <div className="flex-1 h-px bg-neutral-100 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#530099] rounded-full"
            animate={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.15, ease: "linear" }}
          />
        </div>

        {/* Slide counter */}
        <span className="text-xs text-neutral-400 font-light tabular-nums flex-shrink-0">
          <span className="text-neutral-900 font-semibold">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>{" "}
          / {String(slides.length).padStart(2, "0")}
        </span>

        {/* Nav buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`w-9 h-9 rounded-full border flex items-center justify-center
              transition-all duration-300
              ${
                canScrollPrev
                  ? "border-neutral-300 text-neutral-700 hover:border-[#530099] hover:text-[#530099] hover:shadow-[0_0_0_3px_rgba(83,0,153,0.08)]"
                  : "border-neutral-100 text-neutral-300 cursor-not-allowed"
              }`}
            aria-label="Previous slide"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M9 2.5L4.5 7 9 11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`w-9 h-9 rounded-full border flex items-center justify-center
              transition-all duration-300
              ${
                canScrollNext
                  ? "border-neutral-300 text-neutral-700 hover:border-[#530099] hover:text-[#530099] hover:shadow-[0_0_0_3px_rgba(83,0,153,0.08)]"
                  : "border-neutral-100 text-neutral-300 cursor-not-allowed"
              }`}
            aria-label="Next slide"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M5 2.5L9.5 7 5 11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

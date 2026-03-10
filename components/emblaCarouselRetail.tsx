"use client";

import { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

// Swap in real testimonial data here
const testimonials = [
  {
    name: "FirstName LastName",
    occupation: "Occupation",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    name: "FirstName LastName",
    occupation: "Occupation",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
  {
    name: "FirstName LastName",
    occupation: "Occupation",
    quote:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur vel eum iure reprehenderit.",
  },
];

const EmblaCarouselRetail: React.FC<PropType> = ({ slides, options }) => {
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
      {/* Viewport */}
      <div
        ref={emblaRef}
        className="overflow-hidden w-full cursor-grab active:cursor-grabbing"
      >
        <div className="flex gap-4 xl:gap-5 px-6 xl:px-20">
          {slides.map((index) => {
            const { name, occupation, quote } =
              testimonials[index % testimonials.length];
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={index}
                animate={{
                  opacity: isActive ? 1 : 0.45,
                  scale: isActive ? 1 : 0.97,
                }}
                transition={{ duration: 0.4, ease }}
                className="flex-shrink-0 w-[300px] xl:w-[340px] flex flex-col
                  bg-neutral-950 border border-white/8 rounded-2xl p-6
                  shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
              >
                {/* Quote mark */}
                <span className="text-[#B68D07] text-4xl font-serif leading-none mb-4 select-none">
                  &quot;
                </span>

                {/* Quote */}
                <p className="text-white/70 text-sm font-light leading-relaxed flex-1 mb-6">
                  {quote}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-white/8 mb-5" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/8 border border-white/12 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold leading-none mb-1">
                      {name}
                    </p>
                    <p className="text-white/40 text-xs font-light">
                      {occupation}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
          {/* Trailing padding */}
          <div className="flex-shrink-0 w-6 xl:w-20" />
        </div>
      </div>

      {/* Controls */}
      <div className="px-6 xl:px-20 flex items-center justify-between gap-6">
        {/* Progress bar */}
        <div className="flex-1 h-px bg-neutral-200 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#530099] rounded-full"
            animate={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.15, ease: "linear" }}
          />
        </div>

        {/* Counter */}
        <span className="text-xs text-neutral-400 font-light tabular-nums flex-shrink-0">
          <span className="text-neutral-900 font-semibold">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>{" "}
          / {String(slides.length).padStart(2, "0")}
        </span>

        {/* Nav */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300
              ${
                canScrollPrev
                  ? "border-neutral-300 text-neutral-700 hover:border-[#530099] hover:text-[#530099] hover:shadow-[0_0_0_3px_rgba(83,0,153,0.08)]"
                  : "border-neutral-100 text-neutral-300 cursor-not-allowed"
              }`}
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
            aria-label="Next"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300
              ${
                canScrollNext
                  ? "border-neutral-300 text-neutral-700 hover:border-[#530099] hover:text-[#530099] hover:shadow-[0_0_0_3px_rgba(83,0,153,0.08)]"
                  : "border-neutral-100 text-neutral-300 cursor-not-allowed"
              }`}
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

export default EmblaCarouselRetail;

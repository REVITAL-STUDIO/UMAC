"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";

type ImageSlide = { kind: "image"; src: string; alt: string };
type SvgSlide = { kind: "svg"; bg: string; label: string; Illustration: () => JSX.Element };
type Slide = ImageSlide | SvgSlide;

// ── SVG Illustrations ────────────────────────────────────────────────────────

function DiagnosticsIllustration() {
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
      {/* Test tube */}
      <rect x="74" y="30" width="32" height="90" rx="16" fill="white" opacity="0.15" stroke="white" strokeWidth="2" />
      <rect x="74" y="80" width="32" height="40" rx="0" fill="white" opacity="0.25" />
      <rect x="74" y="104" width="32" height="16" rx="16" fill="white" opacity="0.35" />
      {/* Liquid bubbles */}
      <circle cx="83" cy="98" r="4" fill="white" opacity="0.5" />
      <circle cx="94" cy="90" r="3" fill="white" opacity="0.4" />
      <circle cx="88" cy="110" r="2.5" fill="white" opacity="0.6" />
      {/* Checkmark */}
      <circle cx="118" cy="48" r="18" fill="white" opacity="0.15" stroke="white" strokeWidth="2" />
      <path d="M110 48 L116 54 L127 42" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Stars */}
      <circle cx="44" cy="60" r="3.5" fill="white" opacity="0.35" />
      <circle cx="148" cy="110" r="2.5" fill="white" opacity="0.3" />
      <path d="M40 120 L42 126 L48 126 L43 130 L45 136 L40 132 L35 136 L37 130 L32 126 L38 126 Z" fill="white" opacity="0.3" />
      {/* Horizontal lines — data */}
      <line x1="30" y1="150" x2="70" y2="150" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <line x1="30" y1="158" x2="55" y2="158" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
    </svg>
  );
}

function PharmaIllustration() {
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
      {/* Pill bottle */}
      <rect x="60" y="65" width="60" height="75" rx="10" fill="white" opacity="0.15" stroke="white" strokeWidth="2" />
      <rect x="55" y="50" width="70" height="20" rx="6" fill="white" opacity="0.25" stroke="white" strokeWidth="2" />
      {/* Label lines */}
      <line x1="72" y1="100" x2="108" y2="100" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="72" y1="110" x2="100" y2="110" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      {/* Rx symbol */}
      <text x="81" y="92" fontSize="16" fontWeight="700" fill="white" opacity="0.6" fontFamily="serif">Rx</text>
      {/* Capsule pills floating */}
      <rect x="28" y="95" width="32" height="14" rx="7" fill="white" opacity="0.2" />
      <rect x="28" y="95" width="16" height="14" rx="7" fill="white" opacity="0.15" />
      <line x1="44" y1="95" x2="44" y2="109" stroke="white" strokeWidth="1.5" opacity="0.3" />
      <rect x="122" y="120" width="32" height="14" rx="7" fill="white" opacity="0.2" />
      <rect x="138" y="120" width="16" height="14" rx="7" fill="white" opacity="0.15" />
      <line x1="138" y1="120" x2="138" y2="134" stroke="white" strokeWidth="1.5" opacity="0.3" />
      {/* Sparkle */}
      <path d="M145 55 L147 61 L153 61 L148 65 L150 71 L145 67 L140 71 L142 65 L137 61 L143 61 Z" fill="white" opacity="0.35" />
      <circle cx="35" cy="60" r="4" fill="white" opacity="0.25" />
      <circle cx="148" cy="90" r="3" fill="white" opacity="0.2" />
    </svg>
  );
}

function WellnessIllustration() {
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
      {/* Heart */}
      <path
        d="M90 145 C90 145 30 105 30 65 C30 45 48 35 65 42 C75 46 83 53 90 63 C97 53 105 46 115 42 C132 35 150 45 150 65 C150 105 90 145 90 145Z"
        fill="white"
        opacity="0.15"
        stroke="white"
        strokeWidth="2"
      />
      {/* Pulse through heart */}
      <polyline
        points="55,85 68,85 76,68 84,100 92,72 100,85 125,85"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />
      {/* Leaf */}
      <path d="M138 38 C138 38 155 45 152 62 C149 79 135 80 130 72 C125 64 132 45 138 38Z" fill="white" opacity="0.25" stroke="white" strokeWidth="1.5" />
      <path d="M138 38 L134 65" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      {/* Plus / cross — top left */}
      <line x1="40" y1="38" x2="40" y2="54" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      <line x1="32" y1="46" x2="48" y2="46" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      {/* Dots */}
      <circle cx="150" cy="140" r="4" fill="white" opacity="0.25" />
      <circle cx="32" cy="130" r="3" fill="white" opacity="0.2" />
    </svg>
  );
}

function LabIllustration() {
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
      {/* DNA helix left strand */}
      <path d="M70 30 C85 45 65 65 80 80 C95 95 75 115 90 130 C105 145 85 160 100 170"
        stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* DNA helix right strand */}
      <path d="M110 30 C95 45 115 65 100 80 C85 95 105 115 90 130 C75 145 95 160 80 170"
        stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Rungs */}
      <line x1="77" y1="48" x2="103" y2="48" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="72" y1="72" x2="108" y2="72" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="75" y1="96" x2="105" y2="96" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="78" y1="120" x2="102" y2="120" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="82" y1="144" x2="98" y2="144" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      {/* Molecule circles */}
      <circle cx="40" cy="70" r="14" fill="white" opacity="0.1" stroke="white" strokeWidth="1.5" />
      <circle cx="40" cy="70" r="6" fill="white" opacity="0.2" />
      <circle cx="145" cy="100" r="10" fill="white" opacity="0.1" stroke="white" strokeWidth="1.5" />
      <circle cx="145" cy="100" r="4" fill="white" opacity="0.2" />
      <line x1="54" y1="70" x2="70" y2="80" stroke="white" strokeWidth="1.5" opacity="0.3" />
      <line x1="135" y1="100" x2="120" y2="96" stroke="white" strokeWidth="1.5" opacity="0.3" />
      {/* Star */}
      <path d="M38 130 L40 136 L46 136 L41 140 L43 146 L38 142 L33 146 L35 140 L30 136 L36 136 Z" fill="white" opacity="0.3" />
    </svg>
  );
}

function EquipmentIllustration() {
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
      {/* Stethoscope earpieces */}
      <circle cx="62" cy="42" r="8" fill="white" opacity="0.3" stroke="white" strokeWidth="1.5" />
      <circle cx="86" cy="42" r="8" fill="white" opacity="0.3" stroke="white" strokeWidth="1.5" />
      {/* Tubing */}
      <path d="M62 50 L62 88 Q62 110 74 110 Q86 110 86 88 L86 50"
        stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Down to chestpiece */}
      <path d="M74 110 Q74 132 100 132"
        stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Chestpiece */}
      <circle cx="114" cy="132" r="20" fill="white" opacity="0.12" stroke="white" strokeWidth="2" />
      <circle cx="114" cy="132" r="9" fill="white" opacity="0.25" />
      {/* Medical bag — bottom right */}
      <rect x="120" y="60" width="45" height="38" rx="7" fill="white" opacity="0.12" stroke="white" strokeWidth="1.5" />
      <rect x="132" y="54" width="22" height="10" rx="4" fill="white" opacity="0.18" stroke="white" strokeWidth="1.5" />
      <line x1="142" y1="70" x2="142" y2="86" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="134" y1="78" x2="150" y2="78" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {/* Sparkle */}
      <path d="M32 115 L34 121 L40 121 L35 125 L37 131 L32 127 L27 131 L29 125 L24 121 L30 121 Z" fill="white" opacity="0.3" />
      <circle cx="148" cy="158" r="4" fill="white" opacity="0.25" />
      <circle cx="32" cy="60" r="3" fill="white" opacity="0.2" />
    </svg>
  );
}

// ── Slide data ────────────────────────────────────────────────────────────────

const slides: Slide[] = [
  { kind: "image", src: "/images/provider-1.jpg", alt: "Healthcare partner 1" },
  { kind: "svg", bg: "from-[#530099] to-[#3a006b]",   label: "Diagnostics",       Illustration: DiagnosticsIllustration },
  { kind: "image", src: "/images/provider-2.jpg", alt: "Healthcare partner 2" },
  { kind: "svg", bg: "from-[#B68D07] to-[#7a5d00]",   label: "Pharmaceuticals",   Illustration: PharmaIllustration },
  { kind: "image", src: "/images/provider-3.jpg", alt: "Healthcare partner 3" },
  { kind: "svg", bg: "from-[#059669] to-[#064e35]",   label: "Patient Wellness",  Illustration: WellnessIllustration },
  { kind: "image", src: "/images/provider-4.jpg", alt: "Healthcare partner 4" },
  { kind: "svg", bg: "from-[#1d4ed8] to-[#1e3a8a]",   label: "Lab Services",      Illustration: LabIllustration },
  { kind: "svg", bg: "from-[#0f172a] to-[#1e293b]",   label: "Medical Equipment", Illustration: EquipmentIllustration },
];

// ── Component ─────────────────────────────────────────────────────────────────

type PropType = { options?: EmblaOptionsType };

const ease = [0.16, 1, 0.3, 1] as const;

const EmblaCarousel: React.FC<PropType> = ({ options }) => {
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
    setScrollProgress(Math.max(0, Math.min(1, api.scrollProgress())) * 100);
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setActiveIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll).on("scroll", onScroll).on("slideFocus", onScroll);
    return () => { emblaApi.off("scroll", onScroll); };
  }, [emblaApi, onScroll]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden w-full cursor-grab active:cursor-grabbing">
        <div className="flex gap-4 xl:gap-5 pl-6 xl:pl-20">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={index}
                animate={{ opacity: isActive ? 1 : 0.55, scale: isActive ? 1 : 0.97 }}
                transition={{ duration: 0.4, ease }}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden
                  w-[260px] h-[340px] xl:w-[300px] xl:h-[380px]
                  shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              >
                {slide.kind === "image" ? (
                  <>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg} flex flex-col items-center justify-center gap-6`}>
                    <slide.Illustration />
                    <span className="text-white/70 text-xs font-semibold tracking-[0.18em] uppercase absolute bottom-6 left-0 right-0 text-center">
                      {slide.label}
                    </span>
                  </div>
                )}

                {/* Slide number badge */}
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <span className="text-white text-[10px] font-semibold">{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
          <div className="flex-shrink-0 w-6 xl:w-20" />
        </div>
      </div>

      {/* Controls */}
      <div className="px-6 xl:px-20 flex items-center justify-between gap-6">
        <div className="flex-1 h-px bg-neutral-100 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#530099] rounded-full"
            animate={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.15, ease: "linear" }}
          />
        </div>

        <span className="text-xs text-neutral-400 font-light tabular-nums flex-shrink-0">
          <span className="text-neutral-900 font-semibold">{String(activeIndex + 1).padStart(2, "0")}</span>
          {" "}/ {String(slides.length).padStart(2, "0")}
        </span>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300
              ${canScrollPrev
                ? "border-neutral-300 text-neutral-700 hover:border-[#530099] hover:text-[#530099] hover:shadow-[0_0_0_3px_rgba(83,0,153,0.08)]"
                : "border-neutral-100 text-neutral-300 cursor-not-allowed"}`}
            aria-label="Previous slide"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2.5L4.5 7 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300
              ${canScrollNext
                ? "border-neutral-300 text-neutral-700 hover:border-[#530099] hover:text-[#530099] hover:shadow-[0_0_0_3px_rgba(83,0,153,0.08)]"
                : "border-neutral-100 text-neutral-300 cursor-not-allowed"}`}
            aria-label="Next slide"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2.5L9.5 7 5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

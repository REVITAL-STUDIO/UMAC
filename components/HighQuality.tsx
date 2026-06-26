"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

function WoundCareIllustration() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 flex items-center justify-center">
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bandage body */}
        <rect x="55" y="108" width="190" height="84" rx="42" fill="#FDE68A" stroke="#F59E0B" strokeWidth="3" />
        {/* Center gauze pad */}
        <rect x="108" y="118" width="84" height="64" rx="8" fill="#FEF9C3" stroke="#F59E0B" strokeWidth="2" />
        {/* Gauze crosshatch */}
        <line x1="120" y1="125" x2="175" y2="175" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="5 4" />
        <line x1="175" y1="125" x2="120" y2="175" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="5 4" />
        {/* Green healing cross — top right */}
        <rect x="218" y="58" width="12" height="36" rx="4" fill="#34D399" />
        <rect x="208" y="68" width="32" height="12" rx="4" fill="#34D399" />
        {/* Heartbeat line — bottom */}
        <polyline
          points="22,228 58,228 72,196 90,254 110,210 130,228 160,228"
          stroke="#F87171"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Small heart — left */}
        <path
          d="M62 138 C62 134 57 130 53 134 C49 130 44 134 44 138 C44 143 53 150 53 150 C53 150 62 143 62 138Z"
          fill="#F87171"
          opacity="0.75"
        />
        {/* Star sparkle — top left */}
        <path
          d="M48 72 L51 81 L60 81 L53 87 L56 96 L48 90 L40 96 L43 87 L36 81 L45 81 Z"
          fill="#FCD34D"
          opacity="0.85"
        />
        {/* Dots */}
        <circle cx="240" cy="200" r="5" fill="#F59E0B" opacity="0.5" />
        <circle cx="65" cy="200" r="3.5" fill="#34D399" opacity="0.6" />
        <circle cx="260" cy="100" r="4" fill="#F87171" opacity="0.4" />
        {/* Small cross — bottom left */}
        <rect x="34" y="242" width="8" height="22" rx="3" fill="#34D399" opacity="0.6" />
        <rect x="28" y="248" width="20" height="8" rx="3" fill="#34D399" opacity="0.6" />
      </svg>
    </div>
  );
}

function EquipmentIllustration() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 flex items-center justify-center">
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stethoscope earpieces */}
        <circle cx="88" cy="62" r="9" fill="#B68D07" stroke="#B68D07" strokeWidth="2" />
        <circle cx="116" cy="62" r="9" fill="#B68D07" stroke="#B68D07" strokeWidth="2" />
        {/* Stethoscope tubing */}
        <path
          d="M88 71 L88 118 Q88 148 102 148 Q116 148 116 118 L116 71"
          stroke="#530099"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Chestpiece tube down */}
        <path
          d="M102 148 Q102 175 130 175"
          stroke="#530099"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Chestpiece */}
        <circle cx="148" cy="175" r="22" fill="#530099" opacity="0.12" stroke="#530099" strokeWidth="3" />
        <circle cx="148" cy="175" r="10" fill="#530099" opacity="0.35" />
        {/* Medical bag */}
        <rect x="182" y="162" width="78" height="62" rx="10" fill="#530099" opacity="0.1" stroke="#530099" strokeWidth="2.5" />
        <rect x="198" y="154" width="46" height="14" rx="5" fill="#530099" opacity="0.18" stroke="#530099" strokeWidth="2" />
        {/* Bag cross */}
        <line x1="221" y1="178" x2="221" y2="202" stroke="#530099" strokeWidth="3" strokeLinecap="round" />
        <line x1="209" y1="190" x2="233" y2="190" stroke="#530099" strokeWidth="3" strokeLinecap="round" />
        {/* Pill capsule */}
        <rect x="40" y="200" width="72" height="28" rx="14" fill="#34D399" opacity="0.85" />
        <rect x="40" y="200" width="36" height="28" rx="14" fill="#10B981" opacity="0.9" />
        <line x1="76" y1="200" x2="76" y2="228" stroke="white" strokeWidth="2.5" />
        {/* Syringe */}
        <rect x="62" y="240" width="108" height="13" rx="5" fill="#B68D07" opacity="0.2" stroke="#B68D07" strokeWidth="1.8" />
        <rect x="164" y="242" width="22" height="9" rx="3" fill="#B68D07" opacity="0.45" />
        <line x1="186" y1="246" x2="208" y2="246" stroke="#B68D07" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="68" y="242" width="10" height="9" rx="2" fill="#B68D07" opacity="0.5" />
        {/* Star sparkle */}
        <path
          d="M258 66 L261 75 L270 75 L263 81 L266 90 L258 84 L250 90 L253 81 L246 75 L255 75 Z"
          fill="#B68D07"
          opacity="0.75"
        />
        {/* Dots */}
        <circle cx="46" cy="150" r="6" fill="#530099" opacity="0.2" />
        <circle cx="264" cy="160" r="4" fill="#34D399" opacity="0.5" />
        <circle cx="170" cy="240" r="3.5" fill="#530099" opacity="0.3" />
        {/* Small cross — top left */}
        <rect x="38" y="72" width="8" height="24" rx="3" fill="#530099" opacity="0.3" />
        <rect x="31" y="79" width="22" height="8" rx="3" fill="#530099" opacity="0.3" />
      </svg>
    </div>
  );
}

const slides = [
  {
    id: 0,
    label: "01",
    title: "Diagnostics & Lab Services",
    body: "Rapid POC Test Kits for bedside and clinic use, plus Molecular and Genetic Lab Services — giving providers the fast, accurate diagnostic insight needed to make informed treatment decisions.",
    image: "/images/products-slide-1.png",
    Illustration: null as null | (() => JSX.Element),
  },
  {
    id: 1,
    label: "02",
    title: "Wound Care Programs",
    body: "Comprehensive Wound Care and Post-Op Wound Care Programs built for hospitals, clinics, and home care settings — reducing complications, supporting recovery, and improving patient outcomes.",
    image: null as null | string,
    Illustration: WoundCareIllustration,
  },
  {
    id: 2,
    label: "03",
    title: "Supplies, Devices & Equipment",
    body: "A full catalog of Surgical Supplies, Medical Devices, Medical Equipment, Pharmacy Products, Nutraceuticals & Supplements, Revenue Recovery, and BioHazard Waste Removal — everything your facility needs under one partnership.",
    image: null as null | string,
    Illustration: EquipmentIllustration,
  },
];

export default function HighQuality() {
  const [active, setActive] = useState(0);
  const current = slides[active];

  return (
    <section className="w-full py-24 xl:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-20">
        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="block w-8 h-px bg-[#B68D07]" />
              <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
                What We Provide
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 max-w-[22ch]"
            >
              High-Quality Medical Products{" "}
              <span className="text-neutral-400">for Professionals</span>
            </motion.h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-stretch">
          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, x: -24 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="w-full lg:w-[48%] flex-shrink-0 relative rounded-3xl overflow-hidden min-h-[420px]
              shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease }}
                className="absolute inset-0"
              >
                {current.image ? (
                  <>
                    <Image
                      src={current.image}
                      fill
                      alt={current.title}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </>
                ) : (
                  current.Illustration && <current.Illustration />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Active label */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-2.5">
              <p className="text-neutral-800 text-xs font-semibold">
                {current.title}
              </p>
            </div>
          </motion.div>

          {/* Tabs + content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="flex-1 flex flex-col justify-center"
          >
            {/* Tab strip */}
            <div className="flex gap-3 mb-10">
              {slides.map((slide) => {
                const isActive = active === slide.id;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setActive(slide.id)}
                    className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium
                      border transition-all duration-300
                      ${
                        isActive
                          ? "bg-[#530099] border-[#530099] text-white shadow-[0_2px_12px_rgba(83,0,153,0.3)]"
                          : "border-neutral-200 text-neutral-400 hover:text-neutral-700 hover:border-neutral-300 bg-white"
                      }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? "bg-white/60" : "bg-neutral-300"}`}
                    />
                    {slide.label}
                  </button>
                );
              })}
            </div>

            {/* Slide content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease }}
              >
                <h3 className="text-xl xl:text-2xl font-semibold text-neutral-900 tracking-tight mb-4">
                  {current.title}
                </h3>
                <div className="w-8 h-px bg-[#B68D07] mb-5" />
                <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed max-w-[52ch]">
                  {current.body}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex items-center gap-2 mt-10">
              {slides.map((slide) => (
                <button
                  key={slide.id}
                  onClick={() => setActive(slide.id)}
                  className={`rounded-full transition-all duration-300 ${
                    active === slide.id
                      ? "w-6 h-1.5 bg-[#530099]"
                      : "w-1.5 h-1.5 bg-neutral-200 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to slide ${slide.id + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

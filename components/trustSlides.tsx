"use client";
import React from "react";
import { motion } from "framer-motion";
import EmblaCarousel from "./emblaCarousel";

const ease = [0.16, 1, 0.3, 1] as const;

const slideIndexes: number[] = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
];

// const stats = [
//   { value: "200+", label: "Healthcare providers" },
//   { value: "40+", label: "Countries" },
//   { value: "98%", label: "Retention rate" },
// ];

export default function TrustSlides() {
  return (
    <section className="w-full py-24 xl:py-32 overflow-hidden">
      {/* Header row */}
      <div className="px-6 xl:px-20 max-w-7xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          {/* Left */}
          <div className="xl:max-w-[55%]">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="block w-8 h-px bg-[#B68D07]" />
              <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
                Leaders
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease, delay: 0.1 }}
              className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900"
            >
              Trusted by Leading{" "}
              <span className="text-neutral-400">Healthcare Providers</span>
            </motion.h2>
          </div>

          {/* Right — stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="flex items-center gap-8 xl:gap-10 flex-wrap"
          >
            {stats.map(({ value, label }, i) => (
              <React.Fragment key={label}>
                <div>
                  <p className="text-2xl xl:text-3xl font-semibold tracking-tight text-neutral-900 leading-none mb-1">
                    {value}
                  </p>
                  <p className="text-xs text-neutral-400 font-light tracking-wide">
                    {label}
                  </p>
                </div>
                {i < stats.length - 1 && (
                  <span className="hidden xl:block w-px h-8 bg-neutral-200" />
                )}
              </React.Fragment>
            ))}
          </motion.div> */}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
          style={{ originX: 0 }}
          className="mt-12 h-px bg-neutral-100"
        />
      </div>

      {/* Carousel — full bleed, right-anchored */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease, delay: 0.35 }}
        className="w-full flex items-center justify-center xl:justify-end"
      >
        <EmblaCarousel slides={slideIndexes} />
      </motion.div>

      {/* Bottom label row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease, delay: 0.5 }}
        className="px-6 xl:px-20 max-w-7xl mx-auto mt-10 flex items-center gap-3"
      >
        <span className="text-xs text-neutral-400 font-light tracking-wide">
          Partnerships across diagnostics, pharma, and clinical care
        </span>
        <span className="flex-1 h-px bg-neutral-100" />
        <a
          href="/retail"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#530099] hover:gap-3 transition-all duration-300 flex-shrink-0"
        >
          View all partners
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const items = [
  {
    label: "Connecting Care, Transforming Lives",
    body: "We bridge the gap between world-class medical technology and the communities that need it most — ensuring no patient is left behind.",
  },
  {
    label: "Advancing Medical Solutions Worldwide",
    body: "With a global network of partners and distributors, UMAC brings diagnostic innovation to over 40 countries and counting.",
  },
  {
    label: "Our Commitment to Quality",
    body: "Every product and service we deliver is held to the highest clinical and regulatory standards — because lives depend on it.",
  },
];

export default function Potential() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-6 xl:px-20 py-24 xl:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-12 xl:gap-16 items-stretch">
        {/* Left — content */}
        <div className="xl:w-[45%] flex flex-col justify-between">
          {/* Top block */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="block w-8 h-px bg-[#B68D07]" />
              <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
                About UMAC
              </span>
            </motion.div>

            {/* Accordion items */}
            <div className="flex flex-col divide-y divide-neutral-100">
              {items.map(({ label, body }, i) => {
                const isOpen = activeIndex === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.08 }}
                  >
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                    >
                      <span
                        className={`text-base md:text-lg font-semibold leading-snug tracking-tight transition-colors duration-300 ${isOpen ? "text-neutral-900" : "text-neutral-400 group-hover:text-neutral-700"}`}
                      >
                        {label}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease }}
                        className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors duration-300 ${isOpen ? "border-[#530099] text-[#530099]" : "border-neutral-200 text-neutral-400 group-hover:border-neutral-400"}`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M6 2v8M2 6h8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-neutral-500 font-light leading-relaxed pb-5 max-w-[48ch]">
                            {body}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="mt-12 pl-5 border-l-2 border-[#530099]"
          >
            <p className="text-base md:text-lg font-medium text-neutral-800 leading-relaxed">
              By partnering with us, healthcare professionals gain access to
              cutting-edge diagnostics, personalized treatment plans, and
              world-class education.
            </p>
            {/* <a
              href="/about"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#530099] hover:gap-3 transition-all duration-300"
            >
              Discover our story
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a> */}
          </motion.div>
        </div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, x: 24 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="xl:w-[55%] relative rounded-3xl overflow-hidden
            min-h-[60vh] xl:min-h-0
            shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
        >
          <Image
            src="/images/pexels-polina-tankilevitch-5469147.jpg"
            alt="Medical professionals at work"
            fill
            className="object-cover"
          />

          {/* Gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="absolute bottom-6 left-6 right-6
              bg-white/10 backdrop-blur-xl border border-white/20
              rounded-2xl px-5 py-4 flex items-center gap-4"
          >
            <div className="w-9 h-9 rounded-full bg-[#530099] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2v12M2 8h12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-none mb-0.5">
                Global Healthcare Network
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

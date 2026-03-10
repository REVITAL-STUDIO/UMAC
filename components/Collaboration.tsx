"use client";
import React from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const pillars = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 2v14M2 9h14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Clinical Innovation",
    desc: "Cutting-edge diagnostics that redefine standards of care.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="6" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle
          cx="12"
          cy="9"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    label: "Strategic Partnerships",
    desc: "Global alliances that expand access to life-changing solutions.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 15.5A6.5 6.5 0 1 0 9 2.5a6.5 6.5 0 0 0 0 13Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M6.5 9l2 2 3-3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Patient Safety",
    desc: "Every decision anchored by outcomes, ethics, and evidence.",
  },
];

export default function Collaboration() {
  return (
    <section className="w-full overflow-hidden xl:px-20 px-6 py-24 xl:py-36">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-16 xl:gap-24 items-start">
        {/* Left — text */}
        <div className="xl:w-[52%] flex flex-col">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="block w-8 h-px bg-[#B68D07]" />
            <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Mission
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
            className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 mb-8"
          >
            Transforming Healthcare Through{" "}
            <span className="text-neutral-400">
              Innovation and Collaboration
            </span>
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease, delay: 0.2 }}
            className="text-base md:text-lg text-neutral-500 font-light leading-relaxed mb-12 max-w-[52ch]"
          >
            At UMA, we are dedicated to revolutionizing healthcare by leveraging
            cutting-edge technology, strategic partnerships, and personalized
            treatment plans — improving clinical outcomes and patient safety
            through innovation at every level.
          </motion.p>

          {/* CTA */}
        </div>

        {/* Right — pillars */}
        <div className="xl:w-[48%] flex flex-col gap-4">
          {pillars.map(({ icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.1 }}
              className="group flex items-start gap-5 p-6 rounded-2xl border border-neutral-100
                bg-white hover:border-[#530099]/15 hover:bg-[#530099]/[0.02]
                shadow-[0_1px_3px_rgba(0,0,0,0.04)]
                hover:shadow-[0_4px_20px_rgba(83,0,153,0.08)]
                transition-all duration-400 ease-out cursor-default"
            >
              {/* Icon badge */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl
                bg-neutral-100 group-hover:bg-[#530099]/8
                flex items-center justify-center
                text-neutral-500 group-hover:text-[#530099]
                transition-colors duration-300"
              >
                {icon}
              </div>

              <div>
                <p className="text-sm font-semibold text-neutral-900 mb-1 tracking-tight">
                  {label}
                </p>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {desc}
                </p>
              </div>

              {/* Hover arrow */}
              <div className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300 text-[#530099]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          ))}

          {/* Accent stat */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
            className="mt-2 flex items-center gap-6 px-6 py-5 rounded-2xl
              bg-[#530099] text-white"
          >
            <div className="flex-shrink-0">
              <p className="text-4xl font-semibold tracking-tight leading-none">
                20<span className="text-2xl text-white/50">+</span>
              </p>
              <p className="text-white/50 text-xs font-light tracking-wide mt-1">
                Years transforming care
              </p>
            </div>
            <div className="w-px h-10 bg-white/15 flex-shrink-0" />
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Two decades of trust, built on outcomes that speak for themselves.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

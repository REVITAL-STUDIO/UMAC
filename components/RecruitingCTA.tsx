"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const highlights = [
  "Executive & Leadership Search",
  "Clinical Staffing",
  "Administrative Placements",
  "Sales & Business Development Talent",
];

export default function RecruitingCTA() {
  return (
    <section className="w-full py-24 xl:py-32 px-6 xl:px-20 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-12 xl:gap-20">
        {/* Left — text */}
        <div className="xl:w-[55%]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="block w-8 h-px bg-[#B68D07]" />
            <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
              Recruiting Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
            className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-white mb-6"
          >
            We Find the Talent{" "}
            <span className="text-white/35">Your Organization Needs</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease, delay: 0.2 }}
            className="text-sm md:text-base text-white/45 font-light leading-relaxed max-w-[52ch] mb-10"
          >
            UMA provides specialized recruiting solutions for healthcare
            organizations — connecting hospitals, clinics, and medical businesses
            with qualified professionals who deliver results from day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
          >
            <Link
              href="/recruiting"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
                bg-[#530099] text-white text-sm font-semibold tracking-wide
                shadow-[0_0_0_1px_rgba(83,0,153,0.4),0_2px_16px_rgba(83,0,153,0.3)]
                hover:shadow-[0_0_0_1px_rgba(83,0,153,0.6),0_4px_24px_rgba(83,0,153,0.45)]
                hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Explore Recruiting Services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Right — highlight list */}
        <div className="xl:flex-1 flex flex-col gap-3 w-full">
          {highlights.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.08 }}
              className="flex items-center gap-4 px-6 py-5 rounded-2xl border border-white/8 bg-white/4
                hover:border-[#530099]/30 hover:bg-[#530099]/8 transition-all duration-300 group"
            >
              <div className="w-7 h-7 rounded-full bg-[#530099]/20 border border-[#530099]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#530099]/35 transition-colors duration-300">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5l2.5 2.5L8 3"
                    stroke="#530099"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm text-white/60 font-light group-hover:text-white/80 transition-colors duration-300">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

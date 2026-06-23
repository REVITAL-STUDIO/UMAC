"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const specializations = [
  "Infectious Diseases",
  "Neurology",
  "Pain Management",
  "Sales Leadership",
  "Healthcare Networks",
];

export default function Founders() {
  return (
    <section className="w-full py-24 xl:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="block w-8 h-px bg-[#B68D07]" />
          <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
            Our Founder
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 mb-16 xl:mb-20 max-w-[22ch]"
        >
          A Leader in{" "}
          <span className="text-neutral-400">Healthcare Innovation</span>
        </motion.h2>

        {/* Main content */}
        <div className="flex flex-col xl:flex-row items-start gap-12 xl:gap-20">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: -24 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="xl:w-[42%] w-full flex-shrink-0"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/founder-pic.jpg"
                fill
                alt="Terence Green, Founder"
                className="object-cover object-top"
              />
              {/* Bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Name card overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4">
                <p className="text-white font-semibold text-base leading-none mb-1">
                  Terence Green
                </p>
                <p className="text-white/55 text-xs font-light">
                  Founder & CEO, UMA
                </p>
              </div>
            </div>

            {/* Credential badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
              className="mt-4 flex items-center gap-4 px-5 py-4 rounded-2xl border border-neutral-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#530099]/8 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 2L11.5 7H16.5L12.5 10.5L14 15.5L9 12.5L4 15.5L5.5 10.5L1.5 7H6.5L9 2Z"
                    stroke="#530099"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900 leading-none mb-0.5">
                  30+ Years Experience
                </p>
                <p className="text-xs text-neutral-400 font-light">
                  Xavier University of Louisiana
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <div className="xl:flex-1 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="text-base md:text-lg text-neutral-500 font-light leading-relaxed mb-10 max-w-[54ch]"
            >
              With over{" "}
              <span className="text-neutral-900 font-medium">30 years</span> of
              pharmaceutical and medical sales experience, Terence Green has a
              distinguished track record in driving success across various
              healthcare sectors. A{" "}
              <span className="text-neutral-900 font-medium">
                Xavier University of Louisiana
              </span>{" "}
              graduate, Terence has excelled in recruiting, training, and
              leading sales teams, and has worked with a broad spectrum of
              healthcare providers. His extensive experience includes sales
              across national networks, specializing in key therapeutic areas.
            </motion.p>

            {/* Specializations */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
              className="mb-10"
            >
              <p className="text-xs text-neutral-400 font-semibold tracking-[0.15em] uppercase mb-4">
                Areas of Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec) => (
                  <span
                    key={spec}
                    className="px-4 py-2 rounded-full text-xs font-medium
                      border border-neutral-200 text-neutral-600
                      hover:border-[#530099]/30 hover:text-[#530099] hover:bg-[#530099]/4
                      transition-all duration-300 cursor-default"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.35 }}
              style={{ originX: 0 }}
              className="w-full h-px bg-neutral-100 mb-8"
            />

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
              className="pl-5 border-l-2 border-[#530099]"
            >
              <p className="text-base text-neutral-700 font-medium leading-relaxed italic">
                &quot;Our mission is simple: bring the world&apos;s best
                diagnostics and medical solutions to every patient who needs
                them.&quot;
              </p>
              <p className="mt-3 text-xs text-neutral-400 font-light not-italic">
                — Terence Green, Founder & CEO
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

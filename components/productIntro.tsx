"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProductIntro() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-white">
      {/* ── Left — text ── */}
      <div
        className="w-full lg:w-[50%] flex flex-col justify-center
        px-6 xl:px-20 pt-32 pb-12 lg:pt-0 lg:pb-0 flex-shrink-0"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="block w-8 h-px bg-[#B68D07]" />
          <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
            Our Products
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 mb-6"
        >
          Medical Supplies{" "}
          <span className="text-neutral-300">Built for Better Care</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          style={{ originX: 0 }}
          className="w-12 h-px bg-[#B68D07] mb-6"
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="text-sm md:text-base text-neutral-500 font-light leading-relaxed max-w-[48ch] mb-10"
        >
          At UMALLC, we empower healthcare providers with high-quality medical
          supplies and innovative solutions. With over{" "}
          <span className="text-neutral-900 font-medium">28 years</span> of
          global retail sales experience, our team understands the critical
          needs of clinics, hospitals, and healthcare facilities — ensuring
          products that enhance safety and patient care.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.45 }}
          className="flex items-center gap-4 mb-16 lg:mb-0"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
              bg-[#530099] text-white text-sm font-semibold tracking-wide
              shadow-[0_0_0_1px_rgba(83,0,153,0.3),0_2px_16px_rgba(83,0,153,0.2)]
              hover:shadow-[0_0_0_1px_rgba(83,0,153,0.5),0_4px_24px_rgba(83,0,153,0.35)]
              hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Browse products
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="/contact"
            className="text-sm font-semibold text-neutral-400 hover:text-neutral-900 transition-colors duration-300"
          >
            Request a quote →
          </a>
        </motion.div>
      </div>

      {/* ── Right — image treatment ── */}
      <div className="w-full lg:w-[50%] relative flex-shrink-0 min-h-[70vh] lg:min-h-screen bg-neutral-100 overflow-hidden">
        {/* Main full-bleed image */}
        <motion.div
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.1 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/product-hero-1.jpg"
            fill
            alt="Medical product"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40" />
        </motion.div>

        {/* Floating card — second image, bottom-left */}
        <motion.div
          initial={{ opacity: 0, y: 24, x: -12 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.5 }}
          className="absolute bottom-8 left-6 w-[44%] aspect-[4/3] rounded-2xl overflow-hidden
            shadow-[0_16px_48px_rgba(0,0,0,0.3)] border border-white/20"
        >
          <Image
            src="/images/product-hero-2.jpg"
            fill
            alt="Medical product"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>

        {/* Stat badge — top-right */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.7 }}
          className="absolute top-8 right-6 bg-white/10 backdrop-blur-xl border border-white/20
            rounded-2xl px-5 py-4"
        >
          <p className="text-white text-2xl font-semibold leading-none mb-1">
            500+
          </p>
          <p className="text-white/50 text-[11px] font-light tracking-wide">
            Products available
          </p>
        </motion.div>

        {/* Category pills — bottom-right */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.8 }}
          className="absolute bottom-8 right-6 flex flex-col gap-2"
        >
          {["Diagnostics", "Wound Care", "Probiotics", "Supplies"].map(
            (label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.85 + i * 0.06 }}
                className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15
                text-white/70 text-[11px] font-medium tracking-wide text-right"
              >
                {label}
              </motion.span>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}

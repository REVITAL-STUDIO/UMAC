"use client";
import { motion } from "framer-motion";
import Nav from "./Nav";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Nav />

      {/* Video */}
      <video
        loop
        muted
        autoPlay
        playsInline
        src="/images/business-video.mp4"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 -z-[9] bg-gradient-to-br from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 -z-[8] bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Subtle noise grain for depth */}
      <div
        className="absolute inset-0 -z-[7] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 xl:px-20 pt-20">
        <div className="max-w-7xl w-full">
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="block w-8 h-px bg-[#B68D07]" />
            <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
              Advanced Medical Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="text-white font-semibold leading-[1.1] tracking-tight
              text-3xl sm:text-4xl md:text-5xl xl:text-6xl
              max-w-[18ch] mb-6"
          >
            Delivering High-End Diagnostics{" "}
            <span className="text-white/50">for Better Healthcare</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.35 }}
            className="text-white/60 text-base md:text-lg font-light leading-relaxed
              max-w-[46ch] mb-12"
          >
            At UMA, we leverage cutting-edge technology and strategic
            partnerships to improve patient outcomes across every level of care.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="/products"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
                bg-[#530099] text-white text-sm font-semibold tracking-wide
                shadow-[0_0_0_1px_rgba(83,0,153,0.4),0_4px_24px_rgba(83,0,153,0.35)]
                hover:shadow-[0_0_0_1px_rgba(83,0,153,0.6),0_6px_32px_rgba(83,0,153,0.5)]
                transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Products
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
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                border border-white/20 text-white text-sm font-medium tracking-wide
                hover:bg-white/8 hover:border-white/35
                transition-all duration-300 ease-out backdrop-blur-sm"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.65 }}
        className="absolute bottom-0 left-0 right-0 z-10
          border-t border-white/8 bg-black/30 backdrop-blur-md
          px-6 xl:px-20 py-5"
      >
        <div className="max-w-7xl mx-auto flex items-center gap-10 overflow-x-auto">
          {[
            { value: "15+", label: "Years of expertise" },
            { value: "200+", label: "Diagnostic solutions" },
            { value: "40+", label: "Countries served" },
            { value: "99%", label: "Client satisfaction" },
          ].map(({ value, label }, i) => (
            <div key={i} className="flex items-center gap-4 flex-shrink-0">
              <div>
                <p className="text-white text-xl font-semibold tracking-tight leading-none mb-0.5">
                  {value}
                </p>
                <p className="text-white/40 text-xs font-light tracking-wide whitespace-nowrap">
                  {label}
                </p>
              </div>
              {i < 3 && <span className="block w-px h-8 bg-white/10 ml-4" />}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

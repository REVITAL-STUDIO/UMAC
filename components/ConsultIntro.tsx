"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ConsultIntro() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center overflow-hidden">
      {/* Left — text */}
      <div className="w-full lg:w-[48%] flex flex-col justify-center px-6 xl:px-20 py-24 lg:py-0 flex-shrink-0 mt-20 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="block w-8 h-px bg-[#B68D07]" />
          <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
            UMA Professional Services
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 mb-6"
        >
          Consulting for{" "}
          <span className="text-neutral-400">Growth and Success</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          style={{ originX: 0 }}
          className="w-12 h-px bg-[#B68D07] mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="text-sm md:text-base text-neutral-500 font-light leading-relaxed max-w-[52ch] mb-10"
        >
          UMA Consulting empowers teams through personalized development
          programs designed to enhance communication, improve collaboration, and
          unlock the full potential of your workforce. Our customized training
          solutions, led by{" "}
          <span className="text-neutral-900 font-medium">
            certified experts
          </span>
          , equip your team with the tools they need to thrive in today&apos;s
          dynamic work environment.
        </motion.p>
      </div>

      {/* Right — image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease, delay: 0.15 }}
        className="w-full lg:w-[52%] h-[60vh] lg:h-screen flex-shrink-0 p-4 lg:p-6"
      >
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] group">
          <Image
            src="/images/consulting-hero.jpg"
            fill
            alt="UMA Consulting"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
            className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 flex items-center gap-4"
          >
            <div className="w-9 h-9 rounded-full bg-[#530099] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2v12M3.5 6.5l4.5-4.5 4.5 4.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-none mb-0.5">
                Certified Consulting Experts
              </p>
              <p className="text-white/50 text-xs font-light">
                Personalized programs · Team development
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

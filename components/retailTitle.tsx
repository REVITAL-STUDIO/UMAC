"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function RetailTitle() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center px-6 pt-36 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <span className="block w-8 h-px bg-[#B68D07]" />
        <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
          Retail
        </span>
        <span className="block w-8 h-px bg-[#B68D07]" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease, delay: 0.1 }}
        className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 max-w-[22ch] mb-5"
      >
        Bringing High-Quality Products{" "}
        <span className="text-neutral-400">to the Retail World</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.2 }}
        className="text-sm md:text-base text-neutral-400 font-light max-w-[38ch]"
      >
        Explore our curated selection of consumer goods.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.35 }}
        style={{ originX: 0.5 }}
        className="mt-10 w-16 h-px bg-neutral-200"
      />
    </section>
  );
}

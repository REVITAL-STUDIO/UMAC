"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Industry() {
  return (
    <section className="w-full overflow-hidden">
      {/* Text header */}
      <div className="px-6 xl:px-20 py-20 xl:py-28">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row xl:items-end justify-between gap-8">
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
                Our Approach
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900"
            >
              Redefining <span className="text-neutral-400">The Industry</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="text-sm md:text-base text-neutral-500 font-light leading-relaxed max-w-[44ch] xl:text-right"
          >
            We provide the tools and products needed to enhance patient care and
            streamline medical processes — built for professionals who demand
            more.
          </motion.p>
        </div>
      </div>

      {/* Full-width image banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease, delay: 0.15 }}
        className="relative w-full h-[480px] xl:h-[560px] overflow-hidden"
      >
        <Image
          src="/images/pexels-tima-miroshnichenko-5452300.jpg"
          fill
          priority
          alt="Healthcare professionals"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-end px-6 xl:px-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.35 }}
            className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
          >
            <div className="pl-5 border-l-2 border-[#B68D07]">
              <p className="text-white text-lg md:text-xl font-medium leading-snug max-w-[36ch]">
                Empowering healthcare providers with solutions that make a real
                difference.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

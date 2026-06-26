"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ConsultLast() {
  return (
    <section className="w-full px-6 xl:px-20 py-16 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease }}
        className="relative w-full h-[70vh] rounded-3xl overflow-hidden"
      >
        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/consulting.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end px-8 xl:px-14 pb-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="block w-8 h-px bg-[#B68D07]" />
            <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
              UMA Professional Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="text-2xl md:text-3xl xl:text-4xl font-semibold text-white leading-[1.15] tracking-tight max-w-[20ch] mb-4"
          >
            Unlock Your Team&apos;s Full{" "}
            <span className="text-white/50">Potential</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="text-sm md:text-base text-white/60 font-light leading-relaxed max-w-[48ch] mb-8"
          >
            Together, we&apos;ll drive growth and empower your team to excel in
            today&apos;s competitive landscape — taking your business to new
            heights.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

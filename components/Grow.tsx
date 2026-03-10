"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Grow() {
  return (
    <section className="w-full py-24 xl:py-32 px-6 xl:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row-reverse items-center gap-12 xl:gap-20">
        {/* Text */}
        <div className="xl:flex-1 flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="block w-8 h-px bg-[#B68D07]" />
            <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Philosophy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
            className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 mb-6"
          >
            The more you grow,{" "}
            <span className="text-neutral-400">the stronger you become.</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            style={{ originX: 0 }}
            className="w-12 h-px bg-[#B68D07] mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.25 }}
            className="text-sm md:text-base text-neutral-500 font-light leading-relaxed max-w-[52ch] mb-10"
          >
            We believe growth is the foundation of success. Our tailored
            consulting and training programs are designed to foster that growth
            — equipping your workforce with the skills and insights needed to
            excel. Whether through improving{" "}
            <span className="text-neutral-900 font-medium">communication</span>,
            enhancing{" "}
            <span className="text-neutral-900 font-medium">collaboration</span>,
            or developing{" "}
            <span className="text-neutral-900 font-medium">leadership</span>, we
            help your team unlock its full potential.
          </motion.p>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: -24 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="w-full xl:w-[48%] h-[60vh] xl:h-[75vh] flex-shrink-0 relative rounded-3xl overflow-hidden
            shadow-[0_8px_40px_rgba(0,0,0,0.12)] group"
        >
          <Image
            src="/images/consulting-1.png"
            fill
            alt="Team growth and development"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Pull quote badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4"
          >
            <p className="text-white text-sm font-medium leading-snug">
              &quot;Empowering your business to achieve greater strength and
              success.&quot;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

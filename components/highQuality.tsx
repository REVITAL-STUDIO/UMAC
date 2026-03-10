"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const slides = [
  {
    id: 0,
    label: "01",
    title: "Billing & Revenue Management",
    body: "We provide comprehensive solutions that go beyond medical supplies. Our Billing & Revenue Management services streamline your financial operations, ensuring timely reimbursements and efficient billing processes — allowing you to focus entirely on patient care.",
    image: "/images/products-slide-1.png",
  },
  {
    id: 1,
    label: "02",
    title: "Staffing & Recruiting",
    body: "We carefully vet each candidate to ensure they meet technical qualifications and align with your organization's values. From short-term coverage to long-term placements, we connect you with reliable talent so your practice can continue delivering exceptional care without disruption.",
    image: "/images/products-slide-1.png",
  },
  {
    id: 2,
    label: "03",
    title: "Retail Solutions",
    body: "In addition to our medical supply services, we extend our offerings to the retail sector — providing durable goods and consumables tailored to healthcare facilities, including food & drinks, vending machines, and supplements to support patient wellness.",
    image: "/images/products-slide-1.png",
  },
];

export default function HighQuality() {
  const [active, setActive] = useState(0);
  const current = slides[active];

  return (
    <section className="w-full py-24 xl:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-20">
        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-16">
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
                What We Provide
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 max-w-[22ch]"
            >
              High-Quality Medical Products{" "}
              <span className="text-neutral-400">for Professionals</span>
            </motion.h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-stretch">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, x: -24 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="w-full lg:w-[48%] flex-shrink-0 relative rounded-3xl overflow-hidden min-h-[420px]
              shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  fill
                  alt={current.title}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Active label on image */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-2.5">
              <p className="text-white text-xs font-semibold">
                {current.title}
              </p>
            </div>
          </motion.div>

          {/* Tabs + content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="flex-1 flex flex-col justify-center"
          >
            {/* Tab strip */}
            <div className="flex gap-3 mb-10">
              {slides.map((slide) => {
                const isActive = active === slide.id;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setActive(slide.id)}
                    className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium
                      border transition-all duration-300
                      ${
                        isActive
                          ? "bg-[#530099] border-[#530099] text-white shadow-[0_2px_12px_rgba(83,0,153,0.3)]"
                          : "border-neutral-200 text-neutral-400 hover:text-neutral-700 hover:border-neutral-300 bg-white"
                      }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? "bg-white/60" : "bg-neutral-300"}`}
                    />
                    {slide.label}
                  </button>
                );
              })}
            </div>

            {/* Slide content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease }}
              >
                <h3 className="text-xl xl:text-2xl font-semibold text-neutral-900 tracking-tight mb-4">
                  {current.title}
                </h3>
                <div className="w-8 h-px bg-[#B68D07] mb-5" />
                <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed max-w-[52ch]">
                  {current.body}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex items-center gap-2 mt-10">
              {slides.map((slide) => (
                <button
                  key={slide.id}
                  onClick={() => setActive(slide.id)}
                  className={`rounded-full transition-all duration-300 ${
                    active === slide.id
                      ? "w-6 h-1.5 bg-[#530099]"
                      : "w-1.5 h-1.5 bg-neutral-200 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to slide ${slide.id + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

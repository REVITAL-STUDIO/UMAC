"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const features = [
  {
    number: "01",
    title: "Strong Industry Relationships",
    body: "We combine world-class scientific research, advanced statistical methodologies, and cutting-edge clinical data with state-of-the-art tools to create highly personalized healthcare solutions. Our approach integrates the latest developments in medical science, data analytics, and technology — ensuring every patient receives tailored treatments that address their unique needs.",
    image: "/images/transform-1.jpg",
    alt: "Strong industry relationships",
    imageRight: true,
    imageSize: "xl:w-[48%] h-[420px]",
  },
  {
    number: "02",
    title: "Global Reach",
    body: "With a robust network of partners and distributors across the globe, we bring high-quality products and services to markets far and wide. Whether you're looking for durable goods, innovative retail solutions, or expert consulting — our global presence ensures reliability and expertise at every step.",
    image: "/images/transform-2.jpg",
    alt: "Global reach",
    imageRight: false,
    imageSize: "xl:w-[55%] h-[500px]",
  },
  {
    number: "03",
    title: "Extensive Product Range",
    body: "An extensive product range designed to meet diverse market needs. From durable goods and cutting-edge technology to everyday essentials — we provide a comprehensive selection tailored to various industries, ensuring you'll find the right products to support your business and customers effectively.",
    image: "/images/transform-3.jpg",
    alt: "Extensive product range",
    imageRight: true,
    imageSize: "xl:w-[48%] h-[420px]",
  },
];

export default function Transform() {
  return (
    <section className="w-full py-24 xl:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-20">
        {/* Section header */}
        <div className="mb-20 xl:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="block w-8 h-px bg-[#B68D07]" />
            <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
              What We Offer
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
            className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-tight text-neutral-900 max-w-[14ch]"
          >
            Innovative <span className="text-neutral-300">Diagnostics</span>
          </motion.h2>
        </div>

        {/* Feature rows */}
        <div className="flex flex-col gap-28 xl:gap-36">
          {features.map(
            ({ number, title, body, image, alt, imageRight, imageSize }) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease, delay: 0.05 }}
                className={`flex flex-col ${imageRight ? "xl:flex-row" : "xl:flex-row-reverse"} items-center gap-10 xl:gap-16`}
              >
                {/* Text block */}
                <div className="xl:flex-1 flex flex-col">
                  {/* Step number */}
                  <span className="text-[80px] xl:text-[100px] font-semibold leading-none tracking-tight text-neutral-100 select-none mb-2 -ml-1">
                    {number}
                  </span>

                  <h3 className="text-xl xl:text-2xl font-semibold text-neutral-900 tracking-tight mb-5">
                    {title}
                  </h3>

                  <div className="w-8 h-px bg-[#B68D07] mb-6" />

                  <p className="text-base text-neutral-500 font-light leading-relaxed max-w-[50ch]">
                    {body}
                  </p>

                  {/* <a
                    href="/products"
                    className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#530099] hover:gap-3 transition-all duration-300 w-fit"
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a> */}
                </div>

                {/* Image block */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                    x: imageRight ? 24 : -24,
                  }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, ease, delay: 0.15 }}
                  className={`relative ${imageSize} w-full rounded-3xl overflow-hidden flex-shrink-0
                  shadow-[0_8px_40px_rgba(0,0,0,0.10)]`}
                >
                  <Image
                    src={image}
                    fill
                    alt={alt}
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/15" />
                </motion.div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

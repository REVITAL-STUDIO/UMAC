"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const offerings = [
  {
    name: "Durable Goods",
    description:
      "A wide variety of long-lasting products designed for everyday use across industries.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 7h14M3 7l1.5 9h11L17 7M3 7l1-3h12l1 3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Food & Beverages",
    description:
      "High-quality food items and drinks curated for diverse consumer and facility needs.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M7 2v5c0 1.657 1.343 3 3 3s3-1.343 3-3V2M10 10v8M6 18h8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Vending Machines",
    description:
      "State-of-the-art vending solutions tailored to meet the demands of modern businesses.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="4"
          y="2"
          width="12"
          height="16"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <rect
          x="6.5"
          y="4.5"
          width="3"
          height="3"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect
          x="10.5"
          y="4.5"
          width="3"
          height="3"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M6.5 11h7M6.5 13.5h4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Supplements & Nutraceuticals",
    description:
      "Health-focused supplements carefully selected to promote patient wellness and recovery.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M7 3.5h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M8 7h4M10 7v4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Judge Joe Brown Retail Products",
    description:
      "Exclusive retail products from Judge Joe Brown, as an authorized distributor tailored to our customers.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2l2 5h5l-4 3 1.5 5L10 12l-4.5 3L7 10 3 7h5l2-5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function RetailOffer() {
  return (
    <section className="w-full py-24 xl:py-32 px-6 xl:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="block w-8 h-px bg-[#B68D07]" />
            <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
              What We Offer
            </span>
            <span className="block w-8 h-px bg-[#B68D07]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 mb-5 max-w-[20ch]"
          >
            Retail Excellence,{" "}
            <span className="text-neutral-400">Delivered</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="text-sm md:text-base text-neutral-500 font-light leading-relaxed max-w-[56ch]"
          >
            The UMA Retail Division offers a wide selection of products designed
            to meet the needs of various industries and consumers — from durable
            goods to health and wellness products.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid xl:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
          {offerings.map(({ name, description, icon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.07 }}
              className="group flex flex-col p-6 rounded-2xl border border-neutral-100 bg-white
                shadow-[0_2px_12px_rgba(0,0,0,0.04)]
                hover:border-[#530099]/15 hover:shadow-[0_4px_24px_rgba(83,0,153,0.08)]
                transition-all duration-400"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-[#530099]/8
                flex items-center justify-center mb-5
                text-neutral-500 group-hover:text-[#530099]
                transition-colors duration-300"
              >
                {icon}
              </div>

              <h3 className="text-sm font-semibold text-neutral-900 tracking-tight mb-2">
                {name}
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

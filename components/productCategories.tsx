"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const categories = [
  {
    number: "01",
    title: "Nudora Prebiotics & Probiotics",
    subtitle: "All In One Herbals",
    body: "A comprehensive blend of prebiotics, probiotics, and herbal supplements designed to support gut health, immunity, and overall wellness — formulated for today's health-conscious patient.",
    link: { label: "Visit nudora.com/UNITY", href: "https://nudora.com/UNITY" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle
          cx="10"
          cy="10"
          r="7.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M7 10c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="10" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Point of Care Tests",
    subtitle: "Rapid Diagnostic Solutions",
    body: "Fast, accurate POC test kits for use at the bedside, clinic, or pharmacy. Our rapid diagnostics help providers make informed decisions and improve patient outcomes without lab delays.",
    link: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M7 3.5h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M8 8h4M8 11h2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Medical Supplies",
    subtitle: "Surgical & Clinical Essentials",
    body: "A broad catalog of surgical supplies, medical devices, medical equipment, pharmacy products, and biohazard waste removal solutions — everything a modern healthcare facility needs under one partnership.",
    link: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 3v14M3 10h14"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <rect
          x="2"
          y="2"
          width="16"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Wound Care",
    subtitle: "Post-Op & Advanced Wound Programs",
    body: "Comprehensive wound care and post-operative wound care programs built for clinics, hospitals, and home care settings. Our solutions support faster recovery, reduced infection risk, and better patient outcomes.",
    link: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2.5L4 5v5c0 4 2.667 6.833 6 8 3.333-1.167 6-4 6-8V5l-6-2.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M8 10l1.5 1.5L12 8.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ProductCategories() {
  return (
    <section className="w-full py-24 xl:py-32 px-6 xl:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
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
                Product Lines
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900"
            >
              What We <span className="text-neutral-400">Carry</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="text-sm text-neutral-400 font-light leading-relaxed max-w-[40ch] xl:text-right"
          >
            Four core product lines built to serve clinics, hospitals, and
            healthcare facilities at every level of care.
          </motion.p>
        </div>

        {/* Rows */}
        <div className="flex flex-col divide-y divide-neutral-100">
          {categories.map(
            ({ number, title, subtitle, body, link, icon }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease, delay: i * 0.07 }}
                className="group flex flex-col xl:flex-row xl:items-center gap-6 xl:gap-16 py-8
                hover:bg-neutral-50 -mx-6 xl:-mx-20 px-6 xl:px-20 transition-colors duration-300 rounded-2xl"
              >
                {/* Number */}
                <span className="text-[56px] font-semibold leading-none tracking-tight text-neutral-100 select-none flex-shrink-0 xl:w-20">
                  {number}
                </span>

                {/* Icon + title */}
                <div className="flex items-center gap-4 xl:w-56 flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-[#530099]/8
                  flex items-center justify-center flex-shrink-0
                  text-neutral-500 group-hover:text-[#530099]
                  transition-colors duration-300"
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 leading-tight">
                      {title}
                    </p>
                    <p className="text-xs text-neutral-400 font-light mt-0.5">
                      {subtitle}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden xl:block w-px h-10 bg-neutral-200 flex-shrink-0" />

                {/* Body */}
                <p className="flex-1 text-sm text-neutral-500 font-light leading-relaxed">
                  {body}
                </p>

                {/* Link or arrow */}
                <div className="flex-shrink-0">
                  {link ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#530099] hover:gap-3 transition-all duration-300"
                    >
                      {link.label}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ) : (
                    <a
                      href="/contact"
                      className="opacity-0 group-hover:opacity-100 inline-flex items-center gap-2 text-xs font-semibold text-[#530099] transition-all duration-300"
                    >
                      Inquire
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

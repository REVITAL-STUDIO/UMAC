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
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 10c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="10" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Rapid POC Test Kits",
    subtitle: "Point of Care Diagnostics",
    body: "Fast, accurate rapid POC test kits for use at the bedside, clinic, or pharmacy — helping providers make informed decisions and improve patient outcomes without lab delays.",
    link: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7 3.5h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 8h4M8 11h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Wound Care",
    subtitle: "Advanced Wound Management",
    body: "Comprehensive wound care solutions built for clinics, hospitals, and home care settings — supporting faster recovery, reduced infection risk, and improved patient outcomes.",
    link: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2.5L4 5v5c0 4 2.667 6.833 6 8 3.333-1.167 6-4 6-8V5l-6-2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M8 10l1.5 1.5L12 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Post-Op Wound Care Program",
    subtitle: "Post-Operative Recovery",
    body: "Structured post-operative wound care programs designed to support patient recovery after surgery — reducing complications, minimizing readmissions, and promoting healing.",
    link: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 16s-7-4.5-7-9a4 4 0 0 1 7-2.65A4 4 0 0 1 17 7c0 4.5-7 9-7 9Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Surgical Supplies",
    subtitle: "Clinical & Surgical Essentials",
    body: "A broad catalog of surgical supplies sourced for quality and reliability — providing clinics, hospitals, and surgical centers with the essentials they need every day.",
    link: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Nutraceuticals & Supplements",
    subtitle: "Wellness & Nutritional Support",
    body: "High-quality nutraceuticals and supplements to support patient wellness — bridging the gap between pharmaceutical and nutritional care for providers and their patients.",
    link: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <ellipse cx="10" cy="10" rx="3" ry="7" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 10h13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Medical Devices",
    subtitle: "Advanced Clinical Devices",
    body: "A curated selection of medical devices designed for precision and performance — supporting clinical workflows across hospitals, specialty practices, and outpatient settings.",
    link: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 10h2l1.5-2.5L12 12l1.5-2H14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "08",
    title: "Medical Equipment",
    subtitle: "Healthcare Facility Equipment",
    body: "Durable medical equipment sourced to meet the operational demands of modern healthcare facilities — from examination rooms to specialized care units.",
    link: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="6" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 10v4M8 12h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "09",
    title: "Molecular & Genetic Lab Services",
    subtitle: "Advanced Diagnostics",
    body: "Molecular and genetic laboratory services that give providers deeper diagnostic insight — enabling more precise treatment decisions and better long-term patient management.",
    link: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7 3c0 3 6 3 6 7s-6 4-6 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M13 3c0 3-6 3-6 7s6 4 6 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M7.5 7.5h5M7.5 12.5h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "10",
    title: "Pharmacy Products",
    subtitle: "Pharmaceutical Distribution",
    body: "Pharmacy products and pharmaceutical supplies distributed to clinics, hospitals, and purchasing organizations — ensuring timely access to the medications patients need.",
    link: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7 3.5h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 8h4M10 8v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "11",
    title: "Revenue Recovery Program",
    subtitle: "Financial Optimization",
    body: "UMA's Revenue Recovery Program helps healthcare organizations identify and recapture lost revenue — streamlining billing processes and maximizing reimbursements without disrupting patient care.",
    link: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 14l4-5 3.5 3L14 7l3 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    number: "12",
    title: "BioHazard Waste Removal",
    subtitle: "Safe & Compliant Disposal",
    body: "Compliant biohazard waste removal services for healthcare facilities — ensuring safe, regulated disposal of medical waste to protect staff, patients, and the environment.",
    link: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 8V4M13 11.6l3.5 2M7 11.6l-3.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ProductCategories() {
  return (
    <section id="products" className="w-full py-24 xl:py-32 px-6 xl:px-20 overflow-hidden">
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
                Medical Products &amp; Services
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
            Here are some of our top products. For a deeper dive,{" "}
            <a
              href="mailto:info@umallc.com"
              className="text-[#530099] hover:underline"
            >
              info@umallc.com
            </a>
            .
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
                transition={{ duration: 0.7, ease, delay: i * 0.04 }}
                className="group flex flex-col xl:flex-row xl:items-center gap-6 xl:gap-16 py-8
                hover:bg-neutral-50 -mx-6 xl:-mx-20 px-6 xl:px-20 transition-colors duration-300 rounded-2xl"
              >
                {/* Number */}
                <span className="text-[56px] font-semibold leading-none tracking-tight text-neutral-100 select-none flex-shrink-0 xl:w-20">
                  {number}
                </span>

                {/* Icon + title */}
                <div className="flex items-center gap-4 xl:w-56 flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-[#530099]/8 flex items-center justify-center flex-shrink-0 text-neutral-500 group-hover:text-[#530099] transition-colors duration-300">
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
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ) : (
                    <a
                      href="/contact"
                      className="opacity-0 group-hover:opacity-100 inline-flex items-center gap-2 text-xs font-semibold text-[#530099] transition-all duration-300"
                    >
                      Inquire
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

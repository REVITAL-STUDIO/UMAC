"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    title: "Executive & Leadership Search",
    desc: "Identifying top-tier healthcare executives, directors, and senior leaders who drive organizational growth and align with your culture.",
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
  {
    title: "Clinical Staffing",
    desc: "Sourcing qualified physicians, nurses, allied health professionals, and clinical specialists for hospitals, clinics, and specialty practices.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 17A7 7 0 1 0 10 3a7 7 0 0 0 0 14Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M10 7v6M7 10h6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Administrative & Management Placements",
    desc: "Connecting healthcare organizations with experienced administrative professionals, practice managers, and operational staff.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Sales & Business Development Talent",
    desc: "Recruiting high-performing pharmaceutical and medical device sales professionals with proven networks and industry expertise.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 14l4-5 3.5 3L14 7l3 3.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Contract & Temporary Staffing",
    desc: "Flexible short- and long-term placements to fill coverage gaps, manage peak periods, or pilot new roles without long-term commitment.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M7 3.5h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path d="M8 8h4M8 11h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Nationwide Network Access",
    desc: "Leverage UMA's established relationships with hospitals, clinics, ACO groups, and purchasing organizations across the country.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M10 2.5c0 0-3 3-3 7.5s3 7.5 3 7.5M10 2.5c0 0 3 3 3 7.5s-3 7.5-3 7.5M2.5 10h15"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const process = [
  {
    number: "01",
    title: "Discovery & Needs Assessment",
    body: "We start by deeply understanding your organization — your culture, operational goals, and the specific competencies the role demands. No generic job orders.",
  },
  {
    number: "02",
    title: "Targeted Candidate Sourcing",
    body: "UMA's recruiters leverage a proven healthcare network to identify active and passive candidates who match your requirements, not just resumes.",
  },
  {
    number: "03",
    title: "Rigorous Vetting & Screening",
    body: "Every candidate goes through thorough screening — background checks, credential verification, reference calls, and in-depth interviews before you see a single profile.",
  },
  {
    number: "04",
    title: "Presentation & Selection Support",
    body: "We present a shortlist of qualified candidates with detailed profiles, facilitate interviews, and provide guidance throughout your selection process.",
  },
  {
    number: "05",
    title: "Placement & Onboarding Transition",
    body: "UMA stays engaged through offer negotiation and the first 90 days of placement to ensure a smooth transition and long-term fit.",
  },
];

const reasons = [
  {
    title: "Healthcare-Specific Expertise",
    desc: "We only recruit in healthcare. Our team understands clinical environments, regulatory requirements, and what it takes to succeed in medical organizations.",
  },
  {
    title: "Speed Without Sacrificing Quality",
    desc: "Our active pipeline of pre-vetted candidates means faster placements — without cutting corners on screening or fit assessment.",
  },
  {
    title: "Retained & Contingency Options",
    desc: "We offer flexible engagement models designed around your hiring needs — whether you need an exclusive search partner or contingency support.",
  },
  {
    title: "Proven Results Across the Country",
    desc: "UMA has successfully placed professionals in hospitals, specialty clinics, ACO groups, and national purchasing organizations nationwide.",
  },
];

export default function Recruiting() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="w-full flex flex-col items-center justify-center text-center px-6 pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="block w-8 h-px bg-[#B68D07]" />
          <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
            Recruiting Services
          </span>
          <span className="block w-8 h-px bg-[#B68D07]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.1 }}
          className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 max-w-[22ch] mb-5"
        >
          The Right Talent for{" "}
          <span className="text-neutral-400">Healthcare Organizations</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="text-sm md:text-base text-neutral-500 font-light leading-relaxed max-w-[54ch] mb-8"
        >
          UMA provides specialized recruiting solutions for healthcare
          organizations — connecting hospitals, clinics, and medical businesses
          with qualified professionals who deliver results from day one.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
              bg-[#530099] text-white text-sm font-semibold tracking-wide
              shadow-[0_0_0_1px_rgba(83,0,153,0.3),0_2px_16px_rgba(83,0,153,0.2)]
              hover:shadow-[0_0_0_1px_rgba(83,0,153,0.5),0_4px_24px_rgba(83,0,153,0.35)]
              hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Start a Search
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
          style={{ originX: 0.5 }}
          className="mt-12 w-16 h-px bg-neutral-200"
        />
      </section>

      {/* ── Recruiting Services ── */}
      <section className="w-full py-24 xl:py-32 px-6 xl:px-20 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-14">
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
                  What We Offer
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: 0.1 }}
                className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900"
              >
                Full-Spectrum{" "}
                <span className="text-neutral-400">Recruiting Solutions</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="text-sm text-neutral-400 font-light leading-relaxed max-w-[42ch] xl:text-right"
            >
              From clinical professionals to executive leadership, UMA sources
              and places talent across every level of your healthcare
              organization.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {services.map(({ title, desc, icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease, delay: i * 0.07 }}
                className="group flex flex-col p-7 rounded-2xl border border-neutral-200 bg-white
                  shadow-[0_2px_12px_rgba(0,0,0,0.04)]
                  hover:border-[#530099]/15 hover:shadow-[0_4px_24px_rgba(83,0,153,0.08)]
                  transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-[#530099]/8 flex items-center justify-center mb-5 text-neutral-500 group-hover:text-[#530099] transition-colors duration-300">
                  {icon}
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 tracking-tight mb-3">
                  {title}
                </h3>
                <div className="w-6 h-px bg-[#B68D07] mb-4" />
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="w-full py-24 xl:py-32 px-6 xl:px-20 bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="block w-8 h-px bg-[#B68D07]" />
              <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
                How We Work
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-white"
            >
              Our Recruiting <span className="text-white/35">Process</span>
            </motion.h2>
          </div>

          <div className="flex flex-col divide-y divide-white/8">
            {process.map(({ number, title, body }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: i * 0.08 }}
                className="group flex flex-col xl:flex-row xl:items-center gap-6 xl:gap-16 py-8"
              >
                <span className="text-[60px] font-semibold leading-none tracking-tight text-white/10 select-none flex-shrink-0 xl:w-24">
                  {number}
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white tracking-tight mb-2">
                    {title}
                  </h3>
                  <div className="w-6 h-px bg-[#B68D07] mb-3" />
                  <p className="text-sm text-white/40 font-light leading-relaxed max-w-[56ch]">
                    {body}
                  </p>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 text-[#530099]">
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why UMA Recruiting ── */}
      <section className="w-full py-24 xl:py-32 px-6 xl:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-14">
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
                  Why UMA
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: 0.1 }}
                className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900"
              >
                Built for{" "}
                <span className="text-neutral-400">Healthcare, Only</span>
              </motion.h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease, delay: i * 0.07 }}
                className="group flex flex-col p-7 rounded-2xl border border-neutral-100 bg-white
                  shadow-[0_2px_12px_rgba(0,0,0,0.04)]
                  hover:border-[#530099]/15 hover:shadow-[0_4px_24px_rgba(83,0,153,0.08)]
                  transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full bg-[#530099]/10 border border-[#530099]/20 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2.5 2.5L8 3"
                        stroke="#530099"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900 tracking-tight">
                    {title}
                  </h3>
                </div>
                <div className="w-6 h-px bg-[#B68D07] mb-4 ml-9" />
                <p className="text-sm text-neutral-400 font-light leading-relaxed ml-9">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full py-24 xl:py-32 px-6 xl:px-20 bg-neutral-50 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="block w-8 h-px bg-[#B68D07]" />
            <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
              Get Started
            </span>
            <span className="block w-8 h-px bg-[#B68D07]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 mb-5"
          >
            Ready to Find Your{" "}
            <span className="text-neutral-400">Next Hire?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="text-sm md:text-base text-neutral-500 font-light leading-relaxed max-w-[50ch] mx-auto mb-10"
          >
            Tell us about the role and your organization. UMA will put our
            network and expertise to work finding the right fit — fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full
                bg-[#530099] text-white text-sm font-semibold tracking-wide
                shadow-[0_0_0_1px_rgba(83,0,153,0.3),0_2px_16px_rgba(83,0,153,0.2)]
                hover:shadow-[0_0_0_1px_rgba(83,0,153,0.5),0_4px_24px_rgba(83,0,153,0.35)]
                hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Contact Our Recruiting Team
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

"use client";
import { motion } from "framer-motion";
import FoundersCorner from "@/components/FoundersCorner";

const ease = [0.16, 1, 0.3, 1] as const;

const values = [
  {
    name: "Compassion",
    desc: "We lead with genuine care in every partnership — understanding the human impact behind every healthcare decision we make.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 16s-7-4.5-7-9a4 4 0 0 1 7-2.65A4 4 0 0 1 17 7c0 4.5-7 9-7 9Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Quality",
    desc: "We hold ourselves and our partners to the highest clinical and operational standards, ensuring every solution we deliver performs at the highest level.",
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
          d="M7 10l2.5 2.5L13 8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Teamwork",
    desc: "UMA's strength comes from collaboration — working alongside providers, clinics, hospitals, and purchasing organizations to achieve shared goals.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="13" cy="7" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M2 17c0-2.761 2.239-5 5-5h6c2.761 0 5 2.239 5 5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Respect",
    desc: "Every client, partner, and patient we serve is treated with dignity and professionalism — no exceptions, at every level of the organization.",
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
    name: "Integrity",
    desc: "We operate with full transparency and accountability, ensuring every engagement delivers measurable, real-world value to those we serve.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2.5L4 5v5c0 4 2.667 6.833 6 8 3.333-1.167 6-4 6-8V5l-6-2.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 10l2 2 3-3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const competencies = [
  {
    title: "Pharmaceutical Sales & Consulting",
    body: "Specialized pharmaceutical sales and consulting services spanning market access, clinical strategy, and both commercial and governmental healthcare sectors.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M7 3.5h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M8 8h4M10 8v4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Health & Allied Services",
    body: "Health and allied services delivered across multiple care environments — from clinics and hospitals to ACO groups and national purchasing organizations.",
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
    title: "Professional & Management Development Training",
    body: "Professional and management development training designed to build leadership capabilities and equip teams with the tools they need to excel in today&apos;s competitive landscape.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 14l4-5 3.5 3L14 7l3 3.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
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
    title: "Administrative & General Management Consulting",
    body: "Administrative and general management consulting focused on driving operational excellence, reducing costs, and delivering long-term organizational growth.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="3"
          y="3"
          width="6"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <rect
          x="11"
          y="3"
          width="6"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <rect
          x="3"
          y="11"
          width="6"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <rect
          x="11"
          y="11"
          width="6"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    ),
  },
  {
    title: "Professional & Administrative Staffing Solutions",
    body: "Professional and administrative staffing solutions connecting healthcare organizations with qualified clinical and management professionals for short- and long-term placements.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle
          cx="10"
          cy="7"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M3 18c0-3.314 3.134-6 7-6s7 2.686 7 6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const differentiators = [
  {
    number: "01",
    title: "Domestic & International Expertise",
    body: "Extensive experience in domestic and international healthcare sales and operations, bringing a global perspective to every engagement.",
  },
  {
    number: "02",
    title: "Community Engagement & Leadership",
    body: "Strong community engagement and leadership, including successful fundraising initiatives expanding educational access for youth in New Orleans.",
  },
  {
    number: "03",
    title: "Proven Nationwide Collaboration",
    body: "Proven capability to collaborate effectively with hospitals, clinics, physicians, and healthcare systems nationwide.",
  },
];

export default function About() {
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
            About UMA
          </span>
          <span className="block w-8 h-px bg-[#B68D07]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.1 }}
          className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 max-w-[24ch] mb-6"
        >
          Unity Medical Alliance, <span className="text-neutral-400">LLC</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="text-sm md:text-base text-neutral-500 font-light leading-relaxed max-w-[62ch]"
        >
          Unity Medical Alliance, LLC (UMA) is a healthcare solutions and
          management organization providing pharmaceutical, medical, and
          management solutions to both commercial and governmental healthcare
          sectors. With a deep understanding of today&apos;s diverse healthcare
          environments, UMA partners with providers, clinics, ACO groups,
          hospitals, and national purchasing organizations to drive strategic
          growth, operational excellence, and improved patient outcomes.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.35 }}
          style={{ originX: 0.5 }}
          className="mt-10 w-16 h-px bg-neutral-200"
        />
      </section>

      {/* ── Values ── */}
      <section className="w-full py-24 xl:py-32 px-6 xl:px-20 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col  justify-between gap-6 mb-14">
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
                  Our Values
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: 0.1 }}
                className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900"
              >
                What Guides{" "}
                <span className="text-neutral-400">Everything We Do</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="text-sm text-neutral-400 font-light leading-relaxed max-w-[40ch] xl:text-left"
            >
              Compassion, quality, teamwork, respect, and integrity are the core
              values that guide UMA&apos;s operation. These principles ensure
              that every partnership delivers true &ldquo;Value Added
              Services&rdquo; designed to elevate performance, productivity, and
              long-term impact.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-4">
            {values.map(({ name, desc, icon }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease, delay: i * 0.07 }}
                className="group flex flex-col p-6 rounded-2xl border border-neutral-200 bg-white
                  shadow-[0_2px_12px_rgba(0,0,0,0.04)]
                  hover:border-[#530099]/15 hover:shadow-[0_4px_24px_rgba(83,0,153,0.08)]
                  transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-[#530099]/8 flex items-center justify-center mb-5 text-neutral-500 group-hover:text-[#530099] transition-colors duration-300">
                  {icon}
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 tracking-tight mb-2">
                  {name}
                </h3>
                <div className="w-5 h-px bg-[#B68D07] mb-3" />
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Competencies ── */}
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
                  Core Competencies
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: 0.1 }}
                className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900"
              >
                What We <span className="text-neutral-400">Do Best</span>
              </motion.h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {competencies.map(({ title, body, icon }, i) => (
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
                <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-[#530099]/8 flex items-center justify-center mb-5 text-neutral-500 group-hover:text-[#530099] transition-colors duration-300">
                  {icon}
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 tracking-tight mb-3">
                  {title}
                </h3>
                <div className="w-6 h-px bg-[#B68D07] mb-4" />
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Differentiators ── */}
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
                Key Differentiators
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-white"
            >
              What Sets UMA <span className="text-white/35">Apart</span>
            </motion.h2>
          </div>

          <div className="flex flex-col divide-y divide-white/8">
            {differentiators.map(({ number, title, body }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
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

      {/* ── Founder ── */}
      <FoundersCorner />
    </>
  );
}

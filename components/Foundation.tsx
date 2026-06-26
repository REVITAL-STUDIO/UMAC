"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const points = [
  {
    title: "Leadership Development",
    body: "Targeted leadership development programs that equip managers and executives with the skills to inspire their teams, drive organizational growth, and lead with confidence in today's healthcare environment.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2 5h5l-4 3 1.5 5L10 12l-4.5 3L7 10 3 7h5l2-5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Employee Retention",
    body: "Proven strategies and programs that help healthcare organizations reduce turnover, increase employee satisfaction, and build a workplace culture that attracts and retains top talent.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 18c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Team Unity",
    body: "Customized team-building programs that strengthen collaboration, break down silos, and create a unified workforce aligned around your organization's mission and goals.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="13" cy="7" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 17c0-2.761 2.239-5 5-5h6c2.761 0 5 2.239 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Effective Communication",
    body: "Training programs that improve communication at every level of the organization — helping teams communicate clearly, reduce misunderstandings, and foster a more collaborative and productive work environment.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5l2 3 2-3h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M7 8h6M7 11h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Cost Savings Solutions",
    body: "Strategic consulting focused on identifying operational inefficiencies and implementing cost-reduction measures — delivering measurable savings without compromising the quality of care your organization provides.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 14l4-5 3.5 3L14 7l3 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Recruitment & Staffing Services",
    body: "End-to-end recruitment and staffing solutions connecting healthcare organizations with qualified clinical, administrative, and management professionals for short- and long-term placements nationwide.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

export default function Foundation() {
  return (
    <section className="w-full py-24 xl:py-32 px-6 xl:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
              className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 max-w-[22ch]"
            >
              Management &amp; Consulting{" "}
              <span className="text-neutral-400">Services</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="text-sm text-neutral-400 font-light leading-relaxed max-w-[40ch] xl:text-right"
          >
            UMA&apos;s core professional services — built to deliver Value Added Solutions across every level of your healthcare organization.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {points.map(({ title, body, icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="group flex flex-col p-7 rounded-2xl border border-neutral-100 bg-white
                shadow-[0_2px_12px_rgba(0,0,0,0.04)]
                hover:border-[#530099]/15 hover:shadow-[0_4px_24px_rgba(83,0,153,0.08)]
                transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-[#530099]/8
                flex items-center justify-center mb-5 flex-shrink-0
                text-neutral-500 group-hover:text-[#530099]
                transition-colors duration-300"
              >
                {icon}
              </div>

              <h3 className="text-base font-semibold text-neutral-900 tracking-tight mb-3">
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
  );
}

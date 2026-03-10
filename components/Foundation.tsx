"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const points = [
  {
    title: "Tailored Corporate Training",
    body: "We design customized corporate training programs that address the unique needs of your business. Focusing on communication, leadership, and teamwork — each program is carefully crafted to ensure practical, measurable results that align with your company's culture and goals.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2L12.5 7.5H18L13.5 11l2 6L10 14l-5.5 3 2-6L2 7.5h5.5L10 2Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Proven Results in Employee Engagement",
    body: "We have a track record of delivering significant improvements in employee engagement. By enhancing communication and fostering collaboration, we help businesses reduce turnover, increase morale, and build stronger team dynamics that lead to better outcomes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 14l4-5 3.5 3L14 7l3 4"
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
    title: "Certified TypeCoach Expertise",
    body: "As Certified TypeCoach Professionals, UMA Consulting leverages personality type insights to transform workplace communication. Our expertise helps teams understand different communication styles, fostering collaboration, reducing conflicts, and strengthening overall performance.",
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
    title: "Flexible, Scalable Solutions",
    body: "UMA offers flexible consulting solutions that grow alongside your business. Whether in-person workshops, virtual training, or ongoing support — our services are adaptable and scalable to fit your evolving needs and long-term objectives.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M4 10h12M10 4v12"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <rect
          x="2"
          y="2"
          width="7"
          height="7"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <rect
          x="11"
          y="11"
          width="7"
          height="7"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
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
                Why UMA Consulting
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 max-w-[22ch]"
            >
              Built on a Strong{" "}
              <span className="text-neutral-400">Foundation</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="text-sm text-neutral-400 font-light leading-relaxed max-w-[40ch] xl:text-right"
          >
            Four pillars that set our consulting approach apart from the rest.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid xl:grid-cols-2 gap-4">
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

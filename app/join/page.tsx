"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const perks = [
  {
    title: "Uncapped Commissions",
    desc: "Your earning potential is limitless. The harder you work, the more you make — with no ceiling.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2v16M6 6h6a2 2 0 0 1 0 4H8a2 2 0 0 0 0 4h7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Flexible & Remote",
    desc: "Work from anywhere. We believe in results, not micromanagement. Set your own schedule and own your territory.",
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
          d="M10 2.5c0 0-3 3-3 7.5s3 7.5 3 7.5M10 2.5c0 0 3 3 3 7.5s-3 7.5-3 7.5M2.5 10h15"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "World-Class Products",
    desc: "Sell products you believe in. UMA's portfolio of diagnostics, medical supplies, and health solutions practically sells itself.",
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
    title: "Expert Training & Support",
    desc: "Hit the ground running with UMA's onboarding program, ongoing coaching, and a leadership team that's invested in your growth.",
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
  {
    title: "Mission-Driven Work",
    desc: "You're not just selling — you're improving patient outcomes and transforming healthcare. The work matters.",
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
    title: "National Reach",
    desc: "Access to a broad network of hospitals, clinics, and healthcare providers across the country — and growing internationally.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2.5L4 5v5c0 4 2.667 6.833 6 8 3.333-1.167 6-4 6-8V5l-6-2.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const requirements = [
  "Proven track record in medical, pharmaceutical, or B2B sales",
  "Strong communication and relationship-building skills",
  "Self-motivated with an entrepreneurial mindset",
  "Ability to work independently and manage your own territory",
  "Passion for healthcare and improving patient outcomes",
  "Bachelor's degree preferred but not required",
];

export default function JoinUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const get = (id: string) =>
      (document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement)
        .value;

    const name = get("name");
    const email = get("email");
    const phone = get("phone");
    const experience = get("experience");
    const message = get("message");

    const subject = `Sales Rep Application — ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nYears of Experience: ${experience}\n\nWhy I want to join UMA:\n${message}`;

    window.location.href = `mailto:info@umallc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

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
            Join Our Team
          </span>
          <span className="block w-8 h-px bg-[#B68D07]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.1 }}
          className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 max-w-[22ch] mb-5"
        >
          Build Your Career in{" "}
          <span className="text-neutral-400">Healthcare Sales</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="text-sm md:text-base text-neutral-500 font-light leading-relaxed max-w-[52ch] mb-8"
        >
          UMA is looking for driven, entrepreneurial sales professionals to join
          our growing network. If you&apos;re passionate about healthcare and
          want to build a meaningful career with uncapped earning potential — we
          want to hear from you.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          href="#apply"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
            bg-[#530099] text-white text-sm font-semibold tracking-wide
            shadow-[0_0_0_1px_rgba(83,0,153,0.3),0_2px_16px_rgba(83,0,153,0.2)]
            hover:shadow-[0_0_0_1px_rgba(83,0,153,0.5),0_4px_24px_rgba(83,0,153,0.35)]
            hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        >
          Apply now
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
          style={{ originX: 0.5 }}
          className="mt-12 w-16 h-px bg-neutral-200"
        />
      </section>

      {/* ── Why UMA ── */}
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
                More Than a Job —{" "}
                <span className="text-neutral-400">A Career</span>
              </motion.h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {perks.map(({ title, desc, icon }, i) => (
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

      {/* ── Requirements ── */}
      <section className="w-full py-24 xl:py-32 px-6 xl:px-20 bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-16 xl:gap-24 items-start">
          <div className="xl:w-[45%]">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="block w-8 h-px bg-[#B68D07]" />
              <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
                Who We&apos;re Looking For
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight text-white mb-6"
            >
              The Ideal <span className="text-white/35">UMA Rep</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="text-sm text-white/40 font-light leading-relaxed max-w-[44ch]"
            >
              We&apos;re not looking for order-takers. We want motivated,
              resourceful professionals who take ownership and drive results.
            </motion.p>
          </div>

          <div className="xl:flex-1 flex flex-col divide-y divide-white/8">
            {requirements.map((req, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: i * 0.07 }}
                className="flex items-center gap-5 py-5"
              >
                <div className="w-6 h-6 rounded-full bg-[#530099]/20 border border-[#530099]/30 flex items-center justify-center flex-shrink-0">
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
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {req}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section
        id="apply"
        className="w-full py-24 xl:py-32 px-6 xl:px-20 overflow-hidden"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="block w-8 h-px bg-[#B68D07]" />
            <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
              Apply
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 mb-12"
          >
            Ready to Join?{" "}
            <span className="text-neutral-400">Let&apos;s Talk.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="bg-white border border-neutral-100 rounded-3xl p-8
              shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-5"
                >
                  <div className="w-14 h-14 rounded-full bg-[#530099]/8 flex items-center justify-center text-[#530099]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12l5 5L20 7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-neutral-900 mb-1">
                      Application sent!
                    </p>
                    <p className="text-sm text-neutral-400 font-light max-w-[28ch]">
                      Your email client should have opened. We&apos;ll be in
                      touch soon.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#530099] font-semibold hover:underline mt-2"
                  >
                    Submit another application
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex gap-4">
                    <input
                      required
                      id="name"
                      type="text"
                      placeholder="Full name"
                      className="flex-1 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 bg-neutral-50 focus:bg-white focus:outline-none focus:border-[#530099]/50 focus:ring-2 focus:ring-[#530099]/8 transition-all duration-300"
                    />
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Phone number"
                      className="flex-1 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 bg-neutral-50 focus:bg-white focus:outline-none focus:border-[#530099]/50 focus:ring-2 focus:ring-[#530099]/8 transition-all duration-300"
                    />
                  </div>
                  <input
                    required
                    id="email"
                    type="email"
                    placeholder="Email address"
                    className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 bg-neutral-50 focus:bg-white focus:outline-none focus:border-[#530099]/50 focus:ring-2 focus:ring-[#530099]/8 transition-all duration-300"
                  />
                  <input
                    id="experience"
                    type="text"
                    placeholder="Years of sales experience"
                    className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 bg-neutral-50 focus:bg-white focus:outline-none focus:border-[#530099]/50 focus:ring-2 focus:ring-[#530099]/8 transition-all duration-300"
                  />
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Why do you want to join UMA?"
                    className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 bg-neutral-50 focus:bg-white focus:outline-none focus:border-[#530099]/50 focus:ring-2 focus:ring-[#530099]/8 transition-all duration-300 resize-none"
                  />

                  <div className="flex items-center justify-between gap-4 pt-1">
                    <p className="text-[10px] text-neutral-400 font-light max-w-[28ch]">
                      Your application will be sent to our recruiting team at
                      info@umallc.com.
                    </p>
                    <button
                      type="submit"
                      className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3 rounded-full
                        bg-[#530099] text-white text-sm font-semibold tracking-wide
                        shadow-[0_0_0_1px_rgba(83,0,153,0.3),0_2px_12px_rgba(83,0,153,0.2)]
                        hover:shadow-[0_0_0_1px_rgba(83,0,153,0.5),0_4px_20px_rgba(83,0,153,0.35)]
                        hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                      Submit application
                      <svg
                        width="14"
                        height="14"
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
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}

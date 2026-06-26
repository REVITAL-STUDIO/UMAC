"use client";
import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const fields = [
  {
    id: "first_name",
    placeholder: "First name",
    type: "text",
    required: true,
    half: true,
  },
  {
    id: "last_name",
    placeholder: "Last name",
    type: "text",
    required: false,
    half: true,
  },
  {
    id: "email",
    placeholder: "Email address",
    type: "email",
    required: true,
    half: false,
  },
  {
    id: "city",
    placeholder: "City",
    type: "text",
    required: false,
    half: true,
  },
  {
    id: "state",
    placeholder: "State",
    type: "text",
    required: false,
    half: true,
  },
];

const details = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 1.5A4.5 4.5 0 0 1 12.5 6c0 3-4.5 8.5-4.5 8.5S3.5 9 3.5 6A4.5 4.5 0 0 1 8 1.5Z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
    label: "Location",
    value: "United States",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect
          x="1.5"
          y="3.5"
          width="13"
          height="9"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M1.5 5.5l6.5 4 6.5-4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "General Inquiries",
    value: "info@umallc.com",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect
          x="1.5"
          y="3.5"
          width="13"
          height="9"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M1.5 5.5l6.5 4 6.5-4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Administrative",
    value: "admin@umallc.com",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect
          x="1.5"
          y="3.5"
          width="13"
          height="9"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M1.5 5.5l6.5 4 6.5-4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Orders",
    value: "orders@umallc.com",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.1a.5.5 0 0 1 .47.33l1 2.5a.5.5 0 0 1-.12.54L4.8 6.5a8 8 0 0 0 4.7 4.7l1.13-1.17a.5.5 0 0 1 .54-.12l2.5 1a.5.5 0 0 1 .33.47v1.1A1.5 1.5 0 0 1 12.5 14C6.7 14 2 9.3 2 3.5Z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    ),
    label: "Response time",
    value: "Within 24 hours",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const get = (id: string) =>
      (document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement)
        .value;

    const firstName = get("first_name");
    const lastName = get("last_name");
    const email = get("email");
    const city = get("city");
    const state = get("state");
    const message = get("message");

    const subject = `Contact Request from ${firstName} ${lastName}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nCity: ${city}\nState: ${state}\nMessage:\n${message}`;

    window.location.href = `mailto:info@umallc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-50 px-4 pt-28 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-px bg-[#B68D07]" />
            <span className="text-[#B68D07] text-xs font-semibold tracking-[0.2em] uppercase">
              Contact Us
            </span>
            <span className="block w-8 h-px bg-[#B68D07]" />
          </div>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight text-neutral-900">
            Let&apos;s start a{" "}
            <span className="text-neutral-400">conversation</span>
          </h1>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease, delay: 0.1 }}
          className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-[0_16px_60px_rgba(0,0,0,0.1)] flex flex-col md:flex-row"
        >
          {/* Left — image + details */}
          <div className="hidden md:flex flex-col justify-between w-[42%] flex-shrink-0 relative overflow-hidden bg-neutral-950 p-10">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: "url('/images/contact.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950/80" />

            {/* Content */}
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B68D07] mb-4">
                UMA LLC
              </p>
              <h2 className="text-xl font-semibold text-white leading-snug tracking-tight mb-2 max-w-[22ch]">
                Advancing Healthcare Through Partnership
              </h2>
              <p className="text-sm text-white/40 font-light leading-relaxed max-w-[30ch]">
                We&apos;ll provide a detailed overview of how our solutions can
                support and grow your business.
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-5">
              {details.map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-white/50 flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-medium mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-white/70 font-light">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="flex-1 bg-white p-8 md:p-10 flex flex-col justify-center">
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
                      Message sent
                    </p>
                    <p className="text-sm text-neutral-400 font-light max-w-[28ch]">
                      Your email client should have opened. We&apos;ll be in
                      touch within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#530099] font-semibold hover:underline mt-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="flex flex-col gap-5"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-neutral-900 tracking-tight mb-1">
                      Get in touch
                    </h2>
                    <p className="text-xs text-neutral-400 font-light">
                      We respond to all inquiries within 24 hours.
                    </p>
                  </div>

                  {/* Input grid */}
                  <div className="flex flex-wrap gap-4">
                    {fields.map(({ id, placeholder, type, required, half }) => (
                      <input
                        key={id}
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        className={`
                          ${half ? "flex-1 min-w-[120px]" : "w-full"}
                          border border-neutral-200 rounded-xl px-4 py-3
                          text-sm text-neutral-900 placeholder-neutral-400
                          bg-neutral-50 focus:bg-white
                          focus:outline-none focus:border-[#530099]/50 focus:ring-2 focus:ring-[#530099]/8
                          transition-all duration-300
                        `}
                      />
                    ))}
                  </div>

                  {/* Message */}
                  <textarea
                    id="message"
                    placeholder="Your message..."
                    rows={4}
                    className="w-full border border-neutral-200 rounded-xl px-4 py-3
                      text-sm text-neutral-900 placeholder-neutral-400
                      bg-neutral-50 focus:bg-white resize-none
                      focus:outline-none focus:border-[#530099]/50 focus:ring-2 focus:ring-[#530099]/8
                      transition-all duration-300"
                  />

                  {/* Submit */}
                  <div className="flex items-center justify-between gap-4 pt-1">
                    <p className="text-[10px] text-neutral-400 font-light max-w-[28ch]">
                      By submitting, your default email client will open.
                    </p>
                    <button
                      type="submit"
                      className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3 rounded-full
                        bg-[#530099] text-white text-sm font-semibold tracking-wide
                        shadow-[0_0_0_1px_rgba(83,0,153,0.3),0_2px_12px_rgba(83,0,153,0.2)]
                        hover:shadow-[0_0_0_1px_rgba(83,0,153,0.5),0_4px_20px_rgba(83,0,153,0.35)]
                        hover:-translate-y-0.5 active:translate-y-0
                        transition-all duration-300"
                    >
                      Send message
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
          </div>
        </motion.div>
      </div>
    </>
  );
}

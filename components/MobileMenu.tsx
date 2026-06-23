"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Medical Products" },
  { href: "/retail", label: "Retail" },
  { href: "/consulting", label: "Consulting" },
  { href: "/recruiting", label: "Recruiting" },
  { href: "/about", label: "About" },
  { href: "/join", label: "Join Us" },
];

const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.45, ease }}
      className="fixed left-0 top-0 h-full inset-0 z-[999] xl:hidden bg-neutral-950 flex flex-col overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.2 }}
        style={{ originX: 0 }}
        className="w-full h-px bg-white/8"
      />

      {/* Nav links */}
      <div className="flex-1 flex flex-col justify-center px-8 pb-8 mt-16">
        <ul className="flex flex-col">
          {links.map(({ href, label }, i) => {
            const isActive = pathname === href;
            return (
              <motion.li
                key={href}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.06 }}
                className="border-b border-white/8 last:border-none"
              >
                <Link
                  href={href}
                  className={`flex items-center justify-between py-5 group transition-colors duration-300
                    ${isActive ? "text-white" : "text-white/40 hover:text-white"}`}
                >
                  <div className="flex items-center gap-4">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B68D07]" />
                    )}
                    <span
                      className={`text-2xl font-semibold tracking-tight ${!isActive && "pl-[calc(1.5*4px+0.375rem)]"}`}
                    >
                      {label}
                    </span>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <path
                      d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* Bottom CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.5 }}
        className="px-8 pb-12 flex flex-col gap-3 border-t border-white/8 pt-6"
      >
        <Link
          href="/contact"
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full
            bg-[#530099] text-white text-sm font-semibold tracking-wide
            shadow-[0_0_0_1px_rgba(83,0,153,0.4),0_4px_24px_rgba(83,0,153,0.3)]"
        >
          Contact Us
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
        <Link
          href="/join"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full
            border border-white/15 text-white/70 text-sm font-medium tracking-wide
            hover:bg-white/5 hover:border-white/25 transition-all duration-300"
        >
          Join Our Team
        </Link>

        {/* Bottom label */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="w-4 h-px bg-[#B68D07]" />
          <p className="text-[10px] text-white/20 font-light tracking-widest uppercase">
            Unity Medical Alliance
          </p>
          <span className="w-4 h-px bg-[#B68D07]" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;

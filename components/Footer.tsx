import Link from "next/link";
import Image from "next/image";

const links = [
  {
    heading: "Services",
    items: [
      { label: "Medical Products", href: "/products" },
      { label: "Retail", href: "/retail" },
      { label: "Professional Services", href: "/consulting" },
      { label: "Recruiting", href: "/recruiting" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About UMA", href: "/about" },
      { label: "Join Us", href: "/join" },
      { label: "Our Founder", href: "/about#founder" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const emails = [
  { label: "General", address: "info@umallc.com" },
  { label: "Recruiting", address: "Terence@umallc.com" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-white overflow-hidden">
      {/* Top CTA band */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 xl:px-20 py-14 xl:py-16 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B68D07] mb-3">
              Ready to partner with us?
            </p>
            <h2 className="text-2xl xl:text-3xl font-semibold leading-tight tracking-tight text-white max-w-[28ch]">
              Bring world-class diagnostics{" "}
              <span className="text-white/35">to your patients today.</span>
            </h2>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
              bg-[#530099] text-white text-sm font-semibold tracking-wide
              shadow-[0_0_0_1px_rgba(83,0,153,0.5),0_4px_24px_rgba(83,0,153,0.35)]
              hover:shadow-[0_0_0_1px_rgba(83,0,153,0.7),0_6px_32px_rgba(83,0,153,0.5)]
              hover:-translate-y-0.5 active:translate-y-0
              transition-all duration-300"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 xl:px-20 py-14 xl:py-16">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto_auto] gap-12 xl:gap-20">
          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Image
              src="/images/logo.png"
              width={64}
              height={64}
              alt="UMA logo"
              className="brightness-0 invert opacity-90"
            />
            <p className="text-sm text-white/40 font-light leading-relaxed max-w-[36ch]">
              Delivering high-end diagnostics and medical solutions for better
              healthcare outcomes worldwide.
            </p>
            <div className="flex flex-col gap-2">
              {emails.map(({ label, address }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-white/25 w-20 flex-shrink-0">
                    {label}
                  </span>
                  <a
                    href={`mailto:${address}`}
                    className="text-xs text-white/40 hover:text-white/70 transition-colors duration-300 font-light"
                  >
                    {address}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {links.map(({ heading, items }) => (
            <div key={heading} className="flex flex-col gap-5">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30">
                {heading}
              </p>
              <ul className="flex flex-col gap-3">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-light"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 xl:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-white/25 font-light">
            © {new Date().getFullYear()} UMA LLC™. All Rights Reserved.
          </span>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-white/25 hover:text-white/50 transition-colors duration-300 font-light"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/25 hover:text-white/50 transition-colors duration-300 font-light"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

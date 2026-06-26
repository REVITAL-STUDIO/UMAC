"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Medical Products" },
  { href: "/retail", label: "Retail" },
  { href: "/consulting", label: "Professional Services" },
  { href: "/recruiting", label: "Recruiting" },
];

const LIGHT_ROUTES = ["/products", "/retail", "/contact", "/consulting", "/recruiting", "/join", "/about"];

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isLightRoute = LIGHT_ROUTES.includes(pathname);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-[1000]
          transition-all duration-500 ease-out
          ${
            openMenu
              ? "py-3 bg-neutral-950"
              : scrolled || isLightRoute
                ? "py-3 bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
                : "py-5 bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 xl:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex-shrink-0 group">
            <div className="transition-transform duration-300 ease-out group-hover:scale-[0.97]">
              <Image src="/images/logo.png" width={72} height={72} alt="logo" />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    relative px-4 py-2 rounded-full text-xs font-medium tracking-wide
                    transition-all duration-300 ease-out group
                    ${
                      isActive
                        ? isLightRoute || scrolled
                          ? "text-[#530099] bg-[#530099]/8"
                          : "text-white bg-white/12"
                        : isLightRoute || scrolled
                          ? "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full
                        ${isLightRoute || scrolled ? "bg-[#530099]" : "bg-white"}`}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                hidden xl:inline-flex items-center gap-2
                px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide
                bg-[#530099] text-white
                shadow-[0_0_0_1px_rgba(83,0,153,0.3),0_2px_8px_rgba(83,0,153,0.25)]
                hover:shadow-[0_0_0_1px_rgba(83,0,153,0.4),0_4px_16px_rgba(83,0,153,0.4)]
                transition-shadow duration-300
              `}
            >
              Contact Us
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="opacity-70"
              >
                <path
                  d="M2.5 7h9m-4-4.5L11 7l-3.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>

            {/* Hamburger */}
            <button
              onClick={() => setOpenMenu((p) => !p)}
              aria-label={openMenu ? "Close menu" : "Open menu"}
              className={`
                xl:hidden relative z-50 w-10 h-10 rounded-full flex flex-col justify-center items-center gap-[5px]
                transition-colors duration-300
                ${
                  openMenu
                    ? "bg-white/10"
                    : isLightRoute || scrolled
                      ? "hover:bg-neutral-100"
                      : "hover:bg-white/10"
                }
              `}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={
                    openMenu
                      ? i === 0
                        ? { rotate: 45, y: 7, width: "20px" }
                        : i === 1
                          ? { opacity: 0, width: "0px" }
                          : { rotate: -45, y: -7, width: "20px" }
                      : {
                          rotate: 0,
                          y: 0,
                          width: i === 1 ? "12px" : "20px",
                          opacity: 1,
                        }
                  }
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className={`block h-[1.5px] rounded-full origin-center ${
                    openMenu
                      ? "bg-white"
                      : isLightRoute || scrolled
                        ? "bg-neutral-800"
                        : "bg-white"
                  }`}
                  style={{ width: i === 1 ? "12px" : "20px" }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* MobileMenu portaled to body — escapes nav stacking context entirely */}
      {mounted &&
        createPortal(
          <AnimatePresence>{openMenu && <MobileMenu />}</AnimatePresence>,
          document.body,
        )}
    </>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname(); // Get current route path

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  // Opening Mobile Menu
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  // Define the routes that should trigger the color change
  const shouldChangeColor =
    pathname === "/products" ||
    pathname === "/retail" ||
    pathname === "/contact" ||
    pathname === "/consulting";

  return (
    <div className="w-full p-4 text-white flex justify-between items-center xl:px-16 relative">
      <Link href="/" className="z-50">
        <Image src="/images/logo.png" width={80} height={80} alt="logo" />
      </Link>
      <div className="lg:flex gap-12 hidden items-center font-medium">
        {/* Apply the same color change class to all links */}
        <Link
          href="/products"
          className={
            shouldChangeColor
              ? "text-black px-4 py-2 border border-black rounded-full bg-white/20 backdrop-blur-lg hover:shadow-xl hover:shadow-[#B68D07] transition duration-200 ease-in-out"
              : "text-white px-4 py-2 border-b  hover:shadow-xl hover:shadow-[#B68D07] transition duration-200 ease-in-out"
          }
        >
          Medical Products
        </Link>

        <Link
          href="/retail"
          className={
            shouldChangeColor
              ? "text-black px-4 py-2 border border-black rounded-full bg-white/20 backdrop-blur-lg hover:shadow-xl hover:shadow-[#B68D07] transition duration-200 ease-in-out"
              : "text-white px-4 py-2 border-b  hover:shadow-xl hover:shadow-[#B68D07] transition duration-200 ease-in-out"
          }
        >
          Retail
        </Link>
        <Link
          href="/consulting"
          className={
            shouldChangeColor
              ? "text-black px-4 py-2 border border-black rounded-full bg-white/20 backdrop-blur-lg hover:shadow-xl hover:shadow-[#B68D07] transition duration-200 ease-in-out"
              : "text-white px-4 py-2 border-b  hover:shadow-xl hover:shadow-[#B68D07] transition duration-200 ease-in-out"
          }
        >
          Consulting
        </Link>
      </div>
      <div className="flex gap-x-4">
        <a href="/contact" className="bg-[#530099] hidden xl:block text-white rounded-lg text-base shadow-lg px-6 py-3 transition-transform duration-200 hover:scale-105 active:scale-100">
          Contact Us
        </a>
        <button
          onClick={toggleMenu}
          className={`xl:hidden w-12 h-12 flex flex-col relative justify-center items-center rounded-full z-50
          `} // Change background color based on pathname
        >
          <span
            className={`block w-1/2 my-0.5 border-[1.5px] ${
              pathname !== "/" ? "border-black" : "border-white"
            } rounded-full ${
              openMenu
                ? "rotate-45 transition-transform duration-300 ease-in-out"
                : "transition-transform duration-300 ease-in-out"
              }`}
          ></span>
          <span
            className={`block w-1/4 my-0.5 border-[1.5px] ${
              pathname !== "/" ? "border-black" : "border-white"
            } rounded-full ${
              openMenu
                ? "rotate-45 transition-transform duration-300 ease-in-out hidden"
                : "transition-transform duration-300 ease-in-out"
              }`}
          ></span>
          <span
            className={`block ${
              openMenu ? "w-1/2" : "w-1/6"
            } my-0.5 border-[1.5px] ${
              pathname !== "/" ? "border-black" : "border-white"
            } rounded-full ${
              openMenu
                ? "-rotate-45 w-1/2 absolute top-2/5 transition-transform duration-300 ease-in-out"
                : "transition-transform duration-300 ease-in-out"
            }`}
          ></span>
        </button>
      </div>
      <AnimatePresence> {openMenu && <MobileMenu />}</AnimatePresence>
    </div>
  );
}

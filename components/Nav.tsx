"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  //Opening Mobile Menu
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="w-full p-4 text-white flex justify-between items-center xl:px-16 relative">
      <Link href="/">
        <Image src="/images/logo.png" width={80} height={80} alt="logo" />
      </Link>
      <div className="lg:flex gap-12 hidden items-center font-semibold">
        <Link href="/products">Medical Products</Link>
        <Link href="/retail">Retail</Link>
        <Link href="/consulting">Consulting</Link>
      </div>
      <div className="flex gap-x-4">
        <button className="bg-[#530099] text-white rounded-lg text-base shadow-lg px-6 py-3">
          Get Started
        </button>
        <button
          onClick={toggleMenu}
          className={`xl:hidden w-12 h-12 flex flex-col relative justify-center items-center rounded-full space-x-reverse border-[1.5px] z-50 border-[#00803C] z-30`}
        >
          <span
            className={`block w-1/2 my-0.5 border-[1.5px] border-[#00803C]/75 rounded-full ${
              openMenu
                ? "rotate-45 transition-transform duration-300 ease-in-out black-white"
                : "transition-transform duration-300 ease-in-out"
            }`}
          ></span>
          <span
            className={`block w-1/4 my-0.5 border-[1.5px] border-[#00803C]/75 rounded-full ${
              openMenu
                ? "rotate-45 transition-transform duration-300 ease-in-out hidden"
                : "transition-transform duration-300 ease-in-out"
            }`}
          ></span>
          <span
            className={`block ${
              openMenu ? "w-1/2" : "w-1/6"
            } my-0.5 border-[1.5px] border-[#00803C]/75 rounded-full ${
              openMenu
                ? "-rotate-45 w-1/2 absolute top-2/5 transition-transform duration-300 ease-in-out black-white"
                : "transition-transform duration-300 ease-in-out "
            }`}
          ></span>
        </button>
      </div>
      <AnimatePresence> {openMenu && <MobileMenu />}</AnimatePresence>
    </div>
  );
}

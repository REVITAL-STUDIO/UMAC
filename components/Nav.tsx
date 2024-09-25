"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
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
      <button className="bg-[#530099] text-white rounded-lg text-base shadow-lg px-6 py-3 hidden lg:flex">
        Get Started
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center space-y-6">
          <Link href="/products" onClick={toggleMobileMenu}>
            Medical Products
          </Link>
          <Link href="/retail" onClick={toggleMobileMenu}>
            Retail
          </Link>
          <Link href="/consulting" onClick={toggleMobileMenu}>
            Consulting
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="bg-[#530099] text-white rounded-lg text-base shadow-lg px-6 py-3"
          >
            Get Started
          </button>
        </div>
      )}
    </div>
  );
}

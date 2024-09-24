import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="w-full p-4 text-white flex justify-between items-center px-16">
      <div className="flex gap-12 items-center font-semibold">
        <Image src="/images/logo.png" width={80} height={80} alt="logo" />
        <Link href="/products">Medical Products</Link>
        <Link href="/retail">Retail</Link>
        <Link href="/consulting">Consulting</Link>
      </div>
      <button className="bg-[#530099] text-white rounded-lg text-base shadow-lg px-6 py-3">
        Get Started
      </button>
    </div>
  );
}

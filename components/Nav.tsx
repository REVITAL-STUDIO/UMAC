import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="w-full p-4 text-white flex justify-between items-center xl:px-16">
      <Link href="/">
        <Image src="/images/logo.png" width={80} height={80} alt="logo" />
      </Link>
      <div className="xl:flex gap-12 hidden items-center font-semibold">
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

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Nav() {
    return (
        <div className="w-full flex justify-between items-center">
            <div className="flex gap-12 items-center">
                <Image
                    src="/images/logo.png"
                    width={80}
                    height={80}
                    alt="logo"
                />
                <Link href="/products">Medical Products</Link>
                <Link href="/retail">Retail</Link>
                <Link href="/consulting">Consulting</Link>
            </div>
            <button className="bg-[#530099] text-white rounded-[25px] text-xl px-12 py-4">
                Get Started
            </button>
        </div>
    );
}


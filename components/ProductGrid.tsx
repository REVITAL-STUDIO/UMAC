"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const images = [
  {
    src: "/images/JJB-Tiffany-Ad-2.webp",
    alt: "Product feature",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/pexels-natallia-photo-311038782-15897784.jpg",
    alt: "Retail product",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/pexels-kevin-malik-9016814.jpg",
    alt: "Retail product",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/pexels-kampus-7843952.jpg",
    alt: "Retail product",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/pexels-jay-randhawa-368310811-15348499.jpg",
    alt: "Retail product",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/product_1main.jpg",
    alt: "Product showcase",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/pexels-jonathanborba-17820728.jpg",
    alt: "Retail product",
    span: "col-span-1 row-span-1",
  },
];

export default function ProductGrid() {
  return (
    <section className="w-full px-6 xl:px-20 pb-24">
      <div className="max-w-7xl mx-auto grid xl:grid-cols-3 grid-cols-2 grid-rows-3 gap-3 min-h-[900px]">
        {images.map(({ src, alt, span }, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease, delay: i * 0.06 }}
            className={`${span} relative rounded-2xl overflow-hidden group
              shadow-[0_4px_16px_rgba(0,0,0,0.08)]`}
          >
            <Image
              src={src}
              fill
              alt={alt}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

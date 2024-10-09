import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fff] rounded-lg shadow m-4 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            UMA LLC™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex gap-x-6 flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <Link href="/products">Medical Products</Link>
          <Link href="/retail">Retail</Link>
          <Link href="/consulting">Consulting</Link>
        </ul>
      </div>
    </footer>
  );
}

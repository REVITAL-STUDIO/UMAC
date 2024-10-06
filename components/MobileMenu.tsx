import Link from "next/link";
import { motion } from "framer-motion";

const MobileMenu = () => {
  return (
    <motion.section
      initial={{ x: "100%", opacity: 0 }} // Menu starts hidden above the viewport
      animate={{ x: "0%", opacity: 1 }} // Menu moves into view and becomes visible
      exit={{ x: "100%", opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut", // Using easeInOut for a smooth transition
      }}
      className="fixed top-0 left-0 w-full bg-[#000] p-4 z-30 transition-transform duration-300 ease-in-out h-[100%] xl:hidden"
    >
      <motion.div
        initial={{ x: "100%", opacity: 0 }} // Menu starts hidden above the viewport
        animate={{ x: "0%", opacity: 1 }} // Menu moves into view and becomes visible
        exit={{ x: "100%", opacity: 0 }} // Menu exits back to its initial state
        transition={{
          delay: 0.15,
          duration: 0.5,
          ease: "easeInOut", // Using easeInOut for a smooth transition
        }}
        className="absolute top-0 left-0 h-[100%] w-full text-black items-center  backdrop-blur bg-[#000] isolate shadow-lg  z-40"
      >
        <ul className="text-2xl tracking-wider font-normal font-alternate-gothic p-4 flex flex-col mt-[30%] text-white gap-y-6  ">
          {/* Shop */}
          <li className="">
            <Link
              href="/"
              className="px-4 py-2 hover:border-b border-black transition ease-in-out  duration-300"
            >
              Home
            </Link>
          </li>
          {/* Magic Tricks */}
          <li>
            <Link
              href="/products"
              className="px-4 py-2 hover:border-b border-black transition ease-in-out  duration-300"
            >
              Medical Products
            </Link>
          </li>
          {/* Playing Cards */}
          <li>
            <Link
              href="/retail"
              className="px-4 py-2 hover:border-b border-black transition ease-in-out  cursor-pointer duration-300"
            >
              Retail
            </Link>
          </li>
          {/* About */}
          <li className=" ">
            <Link
              href="/consulting"
              className="px-4 py-2 hover:border-b border-black g transition ease-in-out  duration-300"
            >
              Consulting
            </Link>
          </li>
        </ul>
        <div className=" w-full flex flex-col gap-y-4 justify-center items-center mt-[20%] p-4">
          <button className="mx-auto  border text-white  p-4 rounded-md w-full ">
            Contact Us
          </button>
          <button className="mx-auto  bg-[#00803C]/50 text-white  p-4 rounded-md w-full ">
            Get Started
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default MobileMenu;

import React from "react";
import Image from "next/image";

export default function Collaboration() {
  return (
    <section className="w-full p-4 h-screen flex">
      <div className="w-[50%] h-full flex flex-col justify-center">
        <p className="text-5xl px-4 mb-6 text-black">
          Transforming Healthcare Through Innovation and Collaboration
        </p>
        <p className="text-md px-4 text-black/50">
          At UMA, we are dedicated to revolutionizing healthcare by leveraging
          cutting-edge technology, strategic partnerships, and personalized
          treatment plans. Our mission is to improve clinical outcomes and
          patient safety through innovation and collaboration.
        </p>
        <div className="p-4">
          <button className="bg-[#530099] text-white rounded-lg text-base shadow-lg p-6 w-fit mt-6">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-[50%] relative overflow-hidden rounded-lg">
        <Image
          src="/images/home-pic-1.png"
          fill
          alt="care"
          className="absolute w-[100%] h-[100%] inset-0"
        />
      </div>{" "}
      {/* <div className="flex flex-col w-[25%] border-r-[1px] border-black justify-between pr-8 relative top-[6.5rem]">
          <div>
            <h3 className="font-bold text-2xl mb-2">
              Connecting Care, Transforming Lives
            </h3>
            <p className="text-lg">
              Leverage our expertise to enhance clinical outcomes and improve
              patient safety.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-2">
              Connecting Care, Transforming Lives
            </h3>
            <p className="text-lg">
              Leverage our expertise to enhance clinical outcomes and improve
              patient safety.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-2">
              Connecting Care, Transforming Lives
            </h3>
            <p className="text-lg">
              Leverage our expertise to enhance clinical outcomes and improve
              patient safety.
            </p>
          </div>
        </div> */}
      {/* <div className="flex flex-col gap-8 pl-[4rem]">
          <h1 className="font-bold text-4xl w-[75%]">
            Unlocking the Potential of Healthcare Professionals through
            Strategic Partnerships
          </h1>
          <div className="relative top-[3rem] bg-[url('/images/home-pic-2.png')] w-full h-[30rem] bg-cover bg-center rounded-[1.3rem]">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent rounded-[1.3rem]"></div>
            <div className="absolute left-[5%] bottom-[30%]">
              <p className="text-white text-lg font-bold">
                At UMA, we understand the importance of collaboration and
                innovation in healthcare. By partnering with us, healthcare
                professionals gain access to cutting-edge diagnostics,
                personalized treatment plans, and world-class education.
              </p>
            </div>
          </div>
        </div> */}
      {/* </section> */}
    </section>
  );
}

"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function HighQuality() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Billing & Revenue Management",
      content: (
        <>
          <p className="w-[90%] my-4">
            We understand that the medical industry is constantly evolving, and
            managing the day-to-day operations can be overwhelming. That&apos;s
            why we provide comprehensive solutions that go beyond medical
            supplies. Our Billing & Revenue Management services help streamline
            your financial operations, ensuring timely reimbursements and
            efficient billing processes, allowing you to focus on patient care.
          </p>
        </>
      ),
    },
    {
      id: 1,
      title: "Staffing & Recruiting",
      content: (
        <>
          <p className="w-[90%] my-4">
            Whether you&apos;re looking for skilled clinicians, administrative
            staff, or temporary relief for your medical teams, we connect you
            with qualified professionals to help your practice run smoothly and
            efficiently. We understand that finding qualified professionals is
            essential for maintaining the quality of care and smooth operation
            of your healthcare operations. That&apos;s why we carefully vet each
            candidate to ensure they not only meet the technical qualifications
            but also align with your organization&apos;s values and culture.
            From short-term coverage to long-term placements, our team is
            dedicated to connecting you with reliable talent, so your practice
            can continue to deliver exceptional care without disruption.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Retail Solutions",
      content: (
        <>
          <p className="w-[90%] my-4">
            In addition to our medical supply services, we extend our offerings
            to the retail sector, providing an array of durable goods and
            consumables tailored to healthcare facilities.
          </p>
          <ul className="list-disc ml-5 mt-2 w-[90%]">
            <li className="my-4">
              <strong>Food & Drinks</strong> – Keep your staff and patients
              refreshed with a variety of options.
            </li>
            <li className="my-4">
              <strong>Vending Machines</strong> – Offering on-site convenience
              and seamless access to essentials.
            </li>
            <li className="my-4">
              <strong>Supplements & Nutraceuticals</strong> – Carefully selected
              to support patient wellness and recovery.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="xl:my-[6%] ">
      <div className="w-full flex justify-end xl:p-4">
        <h2 className="xl:text-6xl text-4xl p-4 font-bold mb-[4%] xl:w-1/2 w-full ">
          High-Quality Medical Products for Professionals
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-around px-4">
        <div className="relative  overflow-hidden w-full lg:w-2/5 rounded-lg shadow-md h-[500px] border">
          <Image
            src="/images/products-slide-1.png"
            fill
            alt=""
            className="absolute w-[100%] h-[100%] object-cover inset-0"
          />
        </div>

        <div className="w-full xl:w-[45%] flex flex-col  xl:mt-0 my-10 gap-4 xl:px-4">
          <div className="flex gap-8 text-2xl">
            {/* Circles for navigation */}
            {slides.map((slide) => (
              <div
                key={slide.id}
                className={`flex items-center gap-4 border rounded-full cursor-pointer px-4 py-2 ${
                  activeSlide === slide.id
                    ? "font-bold bg-white rounded-full shadow-md"
                    : ""
                }`}
                onClick={() => setActiveSlide(slide.id)}
              >
                <div
                  className={`w-4 h-4 rounded-full ${
                    activeSlide === slide.id ? "bg-[#00803C]" : "bg-gray-300"
                  }`}
                ></div>
                <span>{`0${slide.id + 1}`}</span>
              </div>
            ))}
          </div>

          {/* Display the active slide content */}
          <div className="slides">
            <div className="xl:p-0 p-4">
              <h3 className="font-semibold text-2xl my-4">
                {slides[activeSlide].title}
              </h3>
              <p className="w-[100%] text-justify mt-8 text-base">
                {slides[activeSlide].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

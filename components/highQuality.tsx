import React from "react";
import Image from "next/image";

export default function HighQuality() {
  return (
    <section className="px-4 lg:px-0">
      <div className="w-full flex justify-end">
        <h2 className="text-5xl p-4 font-bold lg:w-[50%] mb-[4%] text-center lg:text-left">
          High-Quality Medical Products for Professionals
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-around">
        <div className="relative mx-auto overflow-hidden w-full lg:w-2/5 rounded-lg shadow-md h-[500px] border">
          <Image
            src="/images/products-slide-1.png"
            fill
            alt=""
            className="absolute w-[100%] h-[100%] object-cover inset-0"
          />
        </div>
        <div className="w-full lg:w-[40%] flex flex-col justify-center gap-4">
          <div className="flex gap-8 text-2xl">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <span>01</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <span>02</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <span>03</span>
            </div>
          </div>
          <div className="slides">
            <div className="hidden">
              <h3 className="font-semibold text-2xl">Billing & Revenue Management</h3>
              <p className="w-[90%] mt-2 ">
                We understand that the medical industry is constantly evolving, and managing the day-to-day operations can be overwhelming.
                That's why we provide comprehensive solutions that go beyond medical supplies. Our Billing & Revenue Management services help streamline your financial operations,
                ensuring timely reimbursements and efficient billing processes, allowing you to focus on patient care.
              </p>
            </div>
            <div className="hidden">
              <h3 className="font-semibold text-2xl">Staffing & Recruiting</h3>
              <p className="w-[90%] mt-2 ">
                Whether you're looking for skilled clinicians, administrative staff, or temporary relief for your medical teams, we connect you with qualified professionals to help your
                practice run smoothly and efficiently. We understand that finding qualified professionals is essential for maintaining the quality of care and smooth operation of your healthcare operations. That's why we carefully vet each candidate to ensure they not only meet the technical qualifications but also align with your organization's values and culture. From short-term coverage to long-term placements, our team is dedicated to connecting you with reliable talent, so your practice can continue to deliver exceptional care without disruption.
              </p>
            </div>
            <div className="">
              <h3 className="font-semibold text-2xl">Retail Solutions</h3>
              <p className="w-[90%] mt-2">
                In addition to our medical supply services, we extend our offerings to the retail sector, providing an array of durable goods and consumables tailored to healthcare facilities.
              </p>
              <ul className="list-disc ml-5 mt-2 w-[90%]">
                <li><strong>Food & Drinks</strong> – Keep your staff and patients refreshed with a variety of options.</li>
                <li><strong>Vending Machines</strong> – Offering on-site convenience and seamless access to essentials.</li>
                <li><strong>Supplements & Nutraceuticals</strong> – Carefully selected to support patient wellness and recovery.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

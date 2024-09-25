import React from "react";
import ConsultingPoint from "./ConsultingPoint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faChartSimple,
  faRocket,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";

export default function Foundation() {
  return (
    <section className="  flex justify-center items-center xl:px-32 px-8 my-[8%]">
      <div className=" grid xl:grid-cols-2 xl:grid-rows-2 gap-12">
        <div className="p-4 border rounded-lg">
          <div className="p-4 rounded-full bg-white w-fit mb-4 shadow-md shadow-[#B68D07]">
            <FontAwesomeIcon
              icon={faRocket}
              className="text-2xl w-[3rem] h-[3rem] text-black"
            />
          </div>
          <ConsultingPoint text="Tailored Corporate Training" />
          <span>
            We design customized corporate training programs that address the
            unique needs of your business. By focusing on areas like
            communication, leadership, and teamwork, we create tailored
            solutions that align with your company’s culture and goals. Each
            program is carefully crafted to ensure practical and measurable
            results. This personalized approach empowers your team to grow and
            perform at its best.
          </span>
        </div>
        <div className="p-4 border rounded-lg">
          <div className="p-4 rounded-full bg-white w-fit mb-4 shadow-md shadow-[#B68D07]">
            <FontAwesomeIcon
              icon={faChartSimple}
              className="text-2xl w-[3rem] h-[3rem] text-black"
            />
          </div>

          <ConsultingPoint text="Proven Results in Employee Engagement" />
          <span>
            Our Company has a track record of delivering significant
            improvements in employee engagement through our consulting services.
            By enhancing communication and fostering a more collaborative work
            environment, we help businesses reduce turnover and increase overall
            team morale. Our methods are built on proven strategies that create
            a more motivated, productive workforce. The result is stronger team
            dynamics and better business outcomes
          </span>
        </div>
        <div className="p-4 border rounded-lg">
          <div className="p-4 rounded-full bg-white w-fit mb-4 shadow-md shadow-[#B68D07]">
            <FontAwesomeIcon
              icon={faCertificate}
              className="text-2xl w-[3rem] h-[3rem] text-black"
            />
          </div>

          <ConsultingPoint text="Certified TypeCoach Expertise" />
          <span>
            As Certified TypeCoach Professionals, UMA Consulting leverages
            personality type insights to transform workplace communication. Our
            expertise helps teams understand and adapt to different
            communication styles, fostering greater collaboration and reducing
            conflicts. Through TypeCoach, we offer training that equips teams
            with tools to better understand one another and work together more
            effectively. This approach strengthens relationships and improves
            overall team performance.
          </span>
        </div>
        <div className="p-4 border rounded-lg">
          <div className="p-4 rounded-full bg-white w-fit mb-4 shadow-md shadow-[#B68D07]">
            <FontAwesomeIcon
              icon={faUpRightAndDownLeftFromCenter}
              className="text-2xl w-[3rem] h-[3rem] text-black"
            />
          </div>

          <ConsultingPoint text="Flexible, Scalable Solutions" />
          <span>
            UMA offers flexible consulting solutions that can grow alongside
            your business. Whether you need in-person workshops, virtual
            training, or ongoing support, our services are adaptable to fit your
            evolving needs. We work with businesses of all sizes, ensuring that
            our programs are scalable and aligned with your long-term
            objectives. This flexibility ensures that you always have the right
            tools and strategies in place to support continuous growth.
          </span>
        </div>
      </div>
    </section>
  );
}

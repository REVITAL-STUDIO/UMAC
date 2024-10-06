import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faParachuteBox,
  faUtensils,
  faCoffee,
  faCapsules,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";

const labels = [
  {
    name: "Durable Goods",
    description:
      "A wide variety of long-lasting products designed for everyday use.",
    fontAwesome: faParachuteBox, // Store the icon object, not JSX
  },
  {
    name: "Food and Beverages",
    description:
      "Selection of high-quality food items and drinks for different consumer needs.",
    fontAwesome: faUtensils, // Example of adding FontAwesome icon if needed
  },
  {
    name: "Vending Machines",
    description:
      "State-of-the-art vending solutions tailored to meet the demands of businesses and consumers.",
    fontAwesome: faCoffee, // Example
  },
  {
    name: "Supplements and Nutraceuticals",
    description:
      "Health-focused supplements and nutraceuticals to promote well-being.",
    fontAwesome: faCapsules, // Example
  },
  {
    name: "Authorized Distributor for Judge Joe Brown Retail Products",
    description:
      "Featuring exclusive retail products from Judge Joe Brown, tailored to serve the needs of our customers.",
    fontAwesome: faShoppingCart, // Example
  },
];

export default function RetailOffer() {
  return (
    <section className="w-full  p-20 ">
      <div className="flex flex-col my-[6%]  text-center justify-center items-center">
        <h1 className="mb-[4%] text-5xl font-bold">
          Retail Excellence, Delivered
        </h1>
        <h2 className=" text-lg xl:w-[75%] w-[100%] font-normal">
          The UMA Retail Division offers a wide selection of products designed
          to meet the needs of various industries and consumers. From durable
          goods to health and wellness products, we provide a diverse range of
          high-quality options for the retail market. Our offerings include:
        </h2>
      </div>
      <div className="grid xl:grid-cols-3 grid-col-1 gap-4 ">
        {labels.map((desc, index) => (
          <div
            key={index}
            className="cols-span-1 row-span-1 flex flex-col  bg-white/20 backdrop-blur-xl rounded-lg shadow-md justify-center items-center p-4"
          >
            <div className="rounded-full w-[8rem] h-[8rem] border-2 border-[#B68D07] bg-[#00803C] p-4 my-[3%] shadow-md flex justify-center items-center">
              <FontAwesomeIcon
                icon={desc.fontAwesome}
                className="text-white text-sm w-[3rem] h-[3rem]"
              />
            </div>
            <h2 className="text-center text-base font-semibold">{desc.name}</h2>
            <p className="my-[5%] text-center text-sm">{desc.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

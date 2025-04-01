"use client"
import React, { useEffect } from "react";
import properties from "../data";
import Card from "../ui/CardItem";
import SortDropdown from "../ui/SortDropDown";
import Aos from "aos";
import "aos/dist/aos.css";

const CardProporties = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-out-cubic",
      delay: 0,
      offset: 80,
    });
  }, []);
  return (
    <div className="mt-[96px] mb-[96px]">
      <div data-aos="fade-up">
        <h2 className="text-[#0D263B] font-[600] text-center text-[28px]">
          {title}
        </h2>
        <p className="text-[#696969] mt-2 text-center text-sm">{description}</p>
      </div>
      <div className="mt-[32px]">
        <div data-aos="fade-up" className="flex mb-[16px] items-center justify-between w-full">
          <span>
            13,474<span className="text-[#696969] ml-1">results</span>
          </span>
          <SortDropdown />
        </div>
        <div className="grid grid-cols-3 max-[1080px]:grid-cols-2 max-sm:grid-cols-1 gap-[20px]">
          {properties.map((property) => (
            <Card key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProporties;

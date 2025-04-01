import React from "react";
import MessageIcon from "@/assets/icons/messageIcon.svg";
import HomeIcon from "@/assets/icons/homeIcon.svg";
import CalculatorIcon from "@/assets/icons/calculatorIcon.svg";
import LocationIcon from "@/assets/icons/LocationIcon.svg";
import Image from "next/image";

const FaqData = [
  {
    id: 1,
    img: MessageIcon,
    title: "Trusted By Thousands",
    description:
      "With over 1 million+ homes for sale available on the website,Trulia can match you with a house you will want to call home.",
  },
  {
    id: 2,
    img: HomeIcon,
    title: "Wide Renge Properties",
    description:
      "With over 1 million+ homes for sale available on the website,Trulia can match you with a house you will want to call home.",
  },
  {
    id: 3,
    img: CalculatorIcon,
    title: "Financing Made Easy",
    description:
      "With over 1 million+ homes for sale available on the website,Trulia can match you with a house you will want to call home.",
  },
  {
    id: 4,
    img: LocationIcon,
    title: "See Neighborhoods",
    description:
      "With over 1 million+ homes for sale available on the website,Trulia can match you with a house you will want to call home.",
  },
];

const FaqComponent = ({title,description}:{title:string,description:string}) => {
  return (
    <div className="bg-[#F5F7FC]">
      <div className="container py-[48px]">
        <div data-aos="zoom-in-up">
          <h2 className="text-[#0D263B] font-[600] text-center text-[28px]">
            {title}
          </h2>
          <p className="text-[#696969] mt-2 text-center text-sm">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-4 max-sm:grid-cols-1 max-[1140px]:grid-cols-2 mt-[40px] gap-[20px] max-sm:gap-[30px]">
          {FaqData?.map((element, i) => {
            return (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={
                  i === 0 ? "0" : i === 1 ? "300" : i === 2 ? "600" : "900"
                }
              >
                <div className="text-center hover:bg-[#fff] hover:shadow-md max-[1140px]:py-[30px] max-sm:py-[40px]  transition-all duration-300 p-[20px] h-[245px]   cursor-pointer  rounded-md  max-[1140px]:w-full w-full">
                  <Image
                    className="mr-auto ml-auto"
                    src={element.img}
                    alt="message-icon-svg"
                  />
                  <h4 className="text-[#0D263B] max-[1140px]:mb-[8px] max-[1140px]:mt-[24px] max-[1285px]:text-[16px] max-[1285px]:mt-[10px] max-[1160px]:mb-0  mt-[24px] mb-[8px] text-lg font-[600]">
                    {element.title}
                  </h4>
                  <p className="text-[#696969] text-sm">
                    {element.description}
                  </p>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;

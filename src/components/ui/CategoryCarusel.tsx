"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HouseCategoryImg from "@/assets/images/houseImg.png"
import HouseCategoryIcon from "@/assets/icons/home 1.svg"
import ApartmentCategoryImg from "@/assets/images/Apartment.png";
import ApartmentCategoryIcon from "@/assets/icons/apartment.svg";
import OfficeCategoryImg from "@/assets/images/OfficeImg.png";
import OfficeCategoryIcon from "@/assets/icons/business-and-trade.svg";
import VillaCategoryImg from "@/assets/images/VillaImg.png";
import VillaCategoryIcon from "@/assets/icons/villa.svg";

import Image from "next/image";
const categories = [
  {
    id: 1,
    categoryImg: OfficeCategoryImg,
    title: "House",
    icon: HouseCategoryIcon,
  },
  {
    id: 2,
    categoryImg: ApartmentCategoryImg,
    title: "Apartment",
    icon: ApartmentCategoryIcon,
  },
  {
    id: 3,
    categoryImg: OfficeCategoryImg,
    title: "Office",
    icon: OfficeCategoryIcon,
  },
  {
    id: 4,
    categoryImg: VillaCategoryImg,
    title: "Villa",
    icon: VillaCategoryIcon,
  },
  {
    id: 5,
    categoryImg: ApartmentCategoryImg,
    title: "Apartment",
    icon: ApartmentCategoryIcon,
  },
  {
    id: 6,
    categoryImg: OfficeCategoryImg,
    title: "Office",
    icon: OfficeCategoryIcon,
  },
];
const CategoryCarusel = () => {

  return (
    <div className="container relative">
      <div className="">
        <button
          className="absolute transition-all 
      duration-300 ease-in-out active:scale-125 max-sm:!ml-[50px] max-sm:!p-[18px] max-sm:!h-[32px] max-sm:!w-[32px] max-sm:!mt-[120px] w-[45px] h-[45px] p-[22px] border border-[#E6E9EC] rounded-full bg-[#fff] shadow-lg left-[-50px] top-1/2 -translate-y-1/2 z-10 swiper-button-prev"
        ></button>
        <button
          className="absolute transition-all 
      duration-300 ease-in-out active:scale-125 max-sm:!mr-[50px] max-sm:!p-[18px] max-sm:!h-[32px] max-sm:!w-[32px] max-sm:!mt-[120px] w-[45px] h-[45px] p-[22px] border border-[#E6E9EC] rounded-full bg-[#fff] shadow-lg right-[-50px] top-1/2 -translate-y-1/2 z-10 swiper-button-next"
        ></button>
      </div>
      <Swiper
        cssMode={true}
        // pagination={{
        //   dynamicBullets: true,
        // }}
        pagination={true}
        loop={true}
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        spaceBetween={38}
        slidesPerGroup={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="RecommendCarusel category-carusel"
        breakpoints={{
          340: { slidesPerView: 2 },
          415: { slidesPerView: 2.5 },
          581: { slidesPerView: 3.5 },
          721: { slidesPerView: 2.5 },
          1020: { slidesPerView: 3 },
          1170: { slidesPerView: 3.5 },
          1285: { slidesPerView: 4 },
        }}
      >
        {categories?.map((property, i) => (
          <SwiperSlide key={property.id}>
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay={
                i === 0 ? "0" : i === 1 ? "300" : i === 2 ? "600" : "900"
              }
              className="relative rounded-[3px] max-[720px]:w-[160px] max-[720px]:h-[200px] cursor-pointer w-[280px] h-[350px] overflow-hidden"
            >
              <Image
                className="object-cover transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:opacity-90"
                src={property.categoryImg}
                alt="category image"
              />
              <div className="absolute pointer-events-none inset-0 flex flex-col items-center justify-center">
                <Image
                  className="categoryIcon"
                  src={property.icon}
                  alt="category icon"
                />
                <h3 className="text-[#fff] font-[600] text-lg mt-[24px]">
                  {property.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategoryCarusel
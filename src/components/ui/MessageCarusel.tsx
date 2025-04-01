"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Avatar from "@/assets/images/avatar.svg";
import Image from "next/image";
const messagesData = [
  {
    id: 1,
    AvatarImg: Avatar,
    name: "Marvin McKinney",
    position: "Designer",
    message:
      "“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “",
  },
  {
    id: 21,
    AvatarImg: Avatar,
    name: "Marvin McKinney",
    position: "Designer",
    message:
      "“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “",
  },
  {
    id: 3,
    AvatarImg: Avatar,
    name: "Marvin McKinney",
    position: "Designer",
    message:
      "“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “",
  },
  {
    id: 4,
    AvatarImg: Avatar,
    name: "Marvin McKinney",
    position: "Designer",
    message:
      "“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “",
  },
];
const MessageCarusel = () => {
  return (
    <div className="container relative">
      <div className="">
        <button
          className="absolute swiper-button-prev3 transition-all 
      duration-300 ease-in-out active:scale-125 max-sm:!ml-[50px] max-sm:!p-[18px] max-sm:!h-[32px] max-sm:!w-[32px] max-sm:!mt-[150px] w-[45px] h-[45px] p-[22px] border border-[#E6E9EC] rounded-full bg-[#fff] shadow-lg left-[-50px] top-1/2 -translate-y-1/2 z-10 swiper-button-prev"
        ></button>
        <button
          className="absolute swiper-button-next3 transition-all 
      duration-300 ease-in-out active:scale-125 max-sm:!mr-[50px] max-sm:!p-[18px] max-sm:!h-[32px] max-sm:!w-[32px] max-sm:!mt-[150px] w-[45px] h-[45px] p-[22px] border border-[#E6E9EC] rounded-full bg-[#fff] shadow-lg right-[-50px] top-1/2 -translate-y-1/2 z-10 swiper-button-next"
        ></button>
      </div>
      <Swiper
        cssMode={true}
        // pagination={{
        //   dynamicBullets: true,
        // }}
        id="carusel-3"
        pagination={true}
        loop={true}
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next3",
          prevEl: ".swiper-button-prev3",
        }}
        className="RecommendCarusel  !will-change-transform relative category-carusel message-carusel"
        breakpoints={{
          340: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1025: { slidesPerView: 3 },
        }}
      >
        {messagesData?.map((property) => (
          <SwiperSlide key={property.id}>
            <div data-aos="fade-up" className="relative">
              <div className="text-center  hover:shadow-xl  animate-t hover:rounded-[3px]  rounded-[3px] px-[40px] pt-[40px] shadow-md pb-[60px] bg-[#fff] cursor-pointer ">
                <p className="text-[#696969]  font-[400]">{property.message}</p>
              </div>
              <div className="mt-[-20px]  relative w-full !z-10  !mx-auto  text-center h-10 rounded-full   border-white">
                <Image
                  src={property.AvatarImg}
                  alt="Agent"
                  className="object-cover mx-auto !w-[40px] !h-[40px]"
                />
                <div className="w-full mt-[16px]">
                  <p className="text-[#0D263B] font-[600] text-[16px]">
                    Marvin McKinney
                  </p>
                  <span className="text-[#696969] font-[400] text-[16px]">
                    Designer
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MessageCarusel;

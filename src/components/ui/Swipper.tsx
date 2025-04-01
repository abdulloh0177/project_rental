"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BannerImage from "@/assets/bannerImage.png"
import Image from "next/image";
import SearchComponent from "../layout/SearchComponent";
import { CgArrowsExpandRight } from "react-icons/cg";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { IoCarOutline } from "react-icons/io5";
import RulerSvg from "@/assets/icons/ruler.svg";
import { Button } from "./button";

export default function SwiperComponent() {
  return (
    <div className="relative  swiper-section1">
      <div className="w-full max-[670px]:mt-[60px] mt-[100px] mb-[96px]">
        <Swiper
          cssMode={true}
          pagination={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              loading="lazy"
              className="w-full"
              src={BannerImage}
              alt="BannerImage"
            />
            <div className="text-center mt-[10%] max-[670px]:mt-[25%] max-[1280px]:mt-[3%] mr-auto ml-auto max-w-[500px] z-10 absolute inset-0 justify-center">
              <h1
                data-aos="fade-right"
                data-aos-duration="800"
                className="text-[#fff] max-lg:text-[28px] font-[700] text-[44px]"
              >
                Skyper Pool Partment
              </h1>
              <p
                data-aos="fade-left"
                data-aos-duration="800"
                className="text-[#fff] text-[16px]"
              >
                112 Glenwood Ave Hyde Park, Boston, MA
              </p>
              <div
                data-aos="zoom-in-up"
                data-aos-duration="800"
                className="grid mx-auto max-w-[340px] grid-cols-3 text-[#fff] text-[16px] max-[670px]:mt-6 max-[960px]:mt-2 mt-6"
              >
                <div className="flex flex-col items-center">
                  <IoBedOutline className="text-xl text-[#fff]" />
                  <span>4 Beds</span>
                </div>
                <div className="flex flex-col items-center">
                  <LiaBathSolid className="text-xl text-[#fff]" />
                  <span>5 Baths</span>
                </div>
                <div className="flex flex-col items-center">
                  <IoCarOutline className="text-xl text-[#fff]" />
                  <span>1 Garage</span>
                </div>
              </div>
              <div
                data-aos="zoom-out-up"
                data-aos-duration="800"
                className="flex flex-col items-center"
              >
                <span className="text-[#fff] max-[670px]:mt-6 max-[960px]:mt-2 font-[600] text-[28px] mt-6">
                  $5,250/mo
                </span>
                <Button
                  // data-aos="fade-up"
                  className="py-4 border transition max-[670px]:mt-6 !duration-300 max-[960px]:mt-2 hover:text-black text-[#fff] font-[400] !h-[44px] active:scale-90  will-change:transform rounded-[3px] max-[1280px]:mt-6 mt-12 border-[#fff] px-12"
                  variant={"outline"}
                  size={"lg"}
                >
                  Read more
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              className="w-full"
              src={BannerImage}
              alt="BannerImage"
            />
            <div className="text-center mt-[10%] max-[670px]:mt-[25%] max-[1280px]:mt-[3%] mr-auto ml-auto max-w-[500px] z-10 absolute inset-0 justify-center">
              <h1
                data-aos="fade-right"
                className="text-[#fff] max-lg:text-[28px] font-[700] text-[44px]"
              >
                Skyper Pool Partment
              </h1>
              <p data-aos="fade-left" className="text-[#fff] text-[16px]">
                112 Glenwood Ave Hyde Park, Boston, MA
              </p>
              <div
                data-aos="zoom-in-up"
                className="grid mx-auto max-w-[340px] grid-cols-3 text-[#fff] text-[16px] max-[670px]:mt-6 max-[960px]:mt-2 mt-6"
              >
                <div className="flex flex-col items-center">
                  <IoBedOutline className="text-xl text-[#fff]" />
                  <span>4 Beds</span>
                </div>
                <div className="flex flex-col items-center">
                  <LiaBathSolid className="text-xl text-[#fff]" />
                  <span>5 Baths</span>
                </div>
                <div className="flex flex-col items-center">
                  <IoCarOutline className="text-xl text-[#fff]" />
                  <span>1 Garage</span>
                </div>
              </div>
              <div
                data-aos="fade-up-right"
                className="flex flex-col items-center"
              >
                <span className="text-[#fff] max-[670px]:mt-6 max-[960px]:mt-2 font-[600] text-[28px] mt-6">
                  $5,250/mo
                </span>
                <Button
                  // data-aos="fade-up"
                  className="py-4 border transition max-[670px]:mt-6 !duration-300 max-[960px]:mt-2 hover:text-black text-[#fff] font-[400] !h-[44px] active:scale-90  will-change:transform rounded-[3px] max-[1280px]:mt-6 mt-12 border-[#fff] px-12"
                  variant={"outline"}
                  size={"lg"}
                >
                  Read more
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              loading="lazy"
              className="w-full"
              src={BannerImage}
              alt="BannerImage"
            />
            <div className="text-center mt-[10%] max-[670px]:mt-[25%] max-[1280px]:mt-[3%] mr-auto ml-auto max-w-[500px] z-10 absolute inset-0 justify-center">
              <h1
                data-aos="fade-right"
                className="text-[#fff] max-lg:text-[28px] font-[700] text-[44px]"
              >
                Skyper Pool Partment
              </h1>
              <p data-aos="fade-left" className="text-[#fff] text-[16px]">
                112 Glenwood Ave Hyde Park, Boston, MA
              </p>
              <div
                data-aos="zoom-in-up"
                className="grid mx-auto max-w-[340px] grid-cols-3 text-[#fff] text-[16px] max-[670px]:mt-6 max-[960px]:mt-2 mt-6"
              >
                <div className="flex flex-col items-center">
                  <IoBedOutline className="text-xl text-[#fff]" />
                  <span>4 Beds</span>
                </div>
                <div className="flex flex-col items-center">
                  <LiaBathSolid className="text-xl text-[#fff]" />
                  <span>5 Baths</span>
                </div>
                <div className="flex flex-col items-center">
                  <IoCarOutline className="text-xl text-[#fff]" />
                  <span>1 Garage</span>
                </div>
              </div>
              <div
                data-aos="fade-up-right"
                className="flex flex-col items-center"
              >
                <span className="text-[#fff] max-[670px]:mt-6 max-[960px]:mt-2 font-[600] text-[28px] mt-6">
                  $5,250/mo
                </span>
                <Button
                  // data-aos="fade-up"
                  className="py-4 border transition max-[670px]:mt-6 !duration-300 max-[960px]:mt-2 hover:text-black text-[#fff] font-[400] !h-[44px] active:scale-90  will-change:transform rounded-[3px] max-[1280px]:mt-6 mt-12 border-[#fff] px-12"
                  variant={"outline"}
                  size={"lg"}
                >
                  Read more
                </Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden bg-[#fff] rounded-[3px] p-[24px] mx-[20px] max-[670px]:inline-block max-[670px]:absolute max-[670px]:bottom-[10%] max-[670px]:z-40">
        <SearchComponent buttonSize="sm" />
      </div>
    </div>
  );
}

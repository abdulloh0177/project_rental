"use client"
import React from "react";
import { PiShareNetworkLight } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { toast } from "sonner";

const ProportyHeader = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <div className="mb-6">
      <div className="flex  justify-between gap-4 md:flex-row items-start">
        <div data-aos="fade-up">
          <h1 className="sm:text-xl text-[16px] primary-color font-bold md:text-2xl">
            Luxury Family Loft by Victoria Park
          </h1>
          <p className="secondary-color mt-2">Quincy St, Brooklyn, NY, USA</p>
        </div>
        <div className="flex secondary-color text-sm items-center gap-[26px]">
          <div className="gap-2 flex items-center">
            <PiShareNetworkLight
              color="#696969"
              size={isMobile ? 35 : 45}
              onClick={() => {
                toast.success("Shared", {
                  description: "Property link copied to clipboard",
                });
              }}
              className=" bg-[#F6F8F9]  cursor-pointer max-sm:p-[8px] p-3 rounded-full color-secondary "
            />
            <span className="hidden sm:inline-block">Share</span>
          </div>
          <div className="gap-2 flex items-center text-sm">
            <MdFavoriteBorder
              onClick={() => {
                toast.success("Saved", {
                  description: "Property saved to your favorites",
                });
              }}
              color="#696969"
              size={isMobile ? 35 : 45}
              className=" bg-[#F6F8F9] cursor-pointer max-sm:p-[8px] p-3 rounded-full color-secondary "
            />
            <span className="hidden sm:inline-block">Save</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProportyHeader;

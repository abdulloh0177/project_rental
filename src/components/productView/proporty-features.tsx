import React from 'react'
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { IoCarOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import RulerSvg from "@/assets/icons/ruler.svg";
import Image from 'next/image';
const ProportyFeatures = () => {
  return (
    <div className="flex max-sm:flex-col items-end justify-between">
      <div className="mb-6 flex flex-wrap gap-6">
        <div className="flex items-center secondary-color gap-2">
          <IoBedOutline className="h-5 w-5 text-muted-foreground" />
          <span className="font-medium text-sm">4 Beds</span>
        </div>
        <div className="flex items-center secondary-color gap-2">
          <LiaBathSolid className="h-5 w-5 text-muted-foreground" />
          <span className="font-medium text-sm">3 Baths</span>
        </div>
        <div className="flex items-center secondary-color gap-2">
          <IoCarOutline className="h-5 w-5 text-muted-foreground" />
          <span className="font-medium text-sm">1 Garage</span>
        </div>
        <div className="flex items-center secondary-color gap-2">
          <Image className="ruler-svg" src={RulerSvg} alt="ruler svg" />
          <span className="font-medium text-sm">1200 Sq Ft</span>
        </div>
        <div className="flex items-center secondary-color gap-2">
          <IoCalendarClearOutline />
          <span className="font-medium text-sm">Year Built: 1800</span>
        </div>
      </div>

      <div className="mb-6">
        <div data-aos="fade-up" className="flex flex-col justify-end">
          <div className="flex items-center">
            <span className="line-through text-[#696969] text-xs">
              $2,800/mo
            </span>
            <span className="text-2xl ml-2 font-bold">$7,500/mo</span>
          </div>
          <span className="text-muted-foreground mt-1 text-sm text-end">
            Est. Mortgage
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProportyFeatures
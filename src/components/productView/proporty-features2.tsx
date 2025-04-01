import React from 'react'
import { TbAirConditioning } from "react-icons/tb";
import { GiBarbecue } from "react-icons/gi";
import { PiHairDryer } from "react-icons/pi";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { LuMicrowave } from "react-icons/lu";
import { BiShower } from "react-icons/bi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GrSwim } from "react-icons/gr";
import { LuCable } from "react-icons/lu";
import { PiSprayBottle } from "react-icons/pi";
import {
  Flower2,
  Dumbbell,
  Waves,
  Wifi,
  AppWindowIcon as Window,
  UtensilsCrossed,
} from "lucide-react";

const ProportyFeatures2 = () => {
  return (
    <div className="mb-8 mt-10">
      <h2 data-aos="zoom-out-left" className="mb-4 text-xl font-semibold">
        Features
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex items-center gap-2">
          <TbAirConditioning className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full  text-muted-foreground" />
          <span className="secondary-color">Air Conditioning</span>
        </div>
        <div className="flex items-center gap-2">
          <Flower2 className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full  text-muted-foreground" />
          <span className="secondary-color">Lawn</span>
        </div>
        <div className="flex items-center gap-2">
          <CgSmartHomeRefrigerator className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full  text-muted-foreground" />
          <span className="secondary-color">Refrigerator</span>
        </div>
        <div className="flex items-center gap-2">
          <PiSprayBottle className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full  text-muted-foreground" />
          <span className="secondary-color">Washer</span>
        </div>
        <div className="flex items-center gap-2">
          <GiBarbecue className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full  text-muted-foreground" />
          <span className="secondary-color">Barbeque</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineLocalLaundryService className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full  text-muted-foreground" />
          <span className="secondary-color">Laundry</span>
        </div>
        <div className="flex items-center gap-2">
          <Waves className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full  text-muted-foreground" />
          <span className="secondary-color">Sauna</span>
        </div>
        <div className="flex items-center gap-2">
          <Wifi className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full  text-muted-foreground" />
          <span className="secondary-color">WiFi</span>
        </div>
        <div className="flex items-center gap-2">
          <PiHairDryer className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full  text-muted-foreground" />
          <span className="secondary-color">Dryer</span>
        </div>
        <div className="flex items-center gap-2">
          <LuMicrowave className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full  text-muted-foreground" />
          <span className="secondary-color">Microwave</span>
        </div>
        <div className="flex items-center gap-2">
          <GrSwim className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full  text-muted-foreground" />
          <span className="secondary-color">Swimming Pool</span>
        </div>
        <div className="flex items-center gap-2">
          <Window className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full  text-muted-foreground" />
          <span className="secondary-color">Window Coverings</span>
        </div>
        <div className="flex items-center gap-2">
          <Dumbbell className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full  text-muted-foreground" />
          <span className="secondary-color">Gym</span>
        </div>
        <div className="flex items-center gap-2">
          <BiShower className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full  text-muted-foreground" />
          <span className="secondary-color">Outdoor Shower</span>
        </div>
        <div className="flex items-center gap-2">
          <LuCable className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full  text-muted-foreground" />
          <span className="secondary-color">TV Cable</span>
        </div>
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="h-10 w-10 bg-[#F6F8F9] p-2 rounded-full text-muted-foreground" />
          <span className="secondary-color">Dining room</span>
        </div>
      </div>
    </div>
  );
}

export default ProportyFeatures2
"use client"
import React from 'react'
import { FaHeart, FaArrowUp } from "react-icons/fa";
import { CgArrowsExpandRight } from "react-icons/cg";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { IoCarOutline } from "react-icons/io5";
import RulerSvg from "@/assets/icons/ruler.svg";
import Image from 'next/image';
import { Property } from '@/types/ui';
import { useRouter } from "next/navigation";
const Card: React.FC<{ property: Property }> = ({ property }) => {
    const router = useRouter();

  return (
    <div onClick={()=>router.push('/productView')} className=" border-[#E6E9EC] cursor-pointer will-change-transform transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-lg border-1 bg-[#fff] rounded-[4px]">
      <div className="relative">
        <Image
          src={property.img}
          alt={property.title}
          width={380}
          height={320}
          className="w-full rounded-[4px]  object-cover"
        />
        <div className="absolute top-5 left-5 bg-blue-600 text-white px-3 py-1 text-xs rounded">
          FEATURED
        </div>
        <div className="absolute top-5 right-5 bg-gray-800 text-white px-3 py-1 text-xs rounded">
          FOR SALE
        </div>

        <div className="absolute bottom-[-8%] right-2 w-10 h-10 rounded-full overflow-hidden border-2 border-white">
          <Image
            src={property.avatar}
            alt="Agent"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>
      <div className="pt-[24px] pb-[16px] px-[20px]">
        <h3 className="text-[16px] text-[#0D263B] font-[600]">
          {property.title}
        </h3>
        <p className="text-sm font-[400] text-[#696969]">{property.location}</p>
        <div className="flex items-center justify-between text-[#696969] text-sm mt-4">
          <div className="flex flex-col items-center">
            <IoBedOutline className="text-xl text-[#696969]" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex flex-col items-center">
            <LiaBathSolid className="text-xl text-[#696969]" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex flex-col items-center">
            <IoCarOutline className="text-xl text-[#696969]" />
            <span>{property.garage} Garage</span>
          </div>
          <div className="flex flex-col items-center">
            <Image className="ruler-svg" src={RulerSvg} alt="ruler svg" />
            <span className="mt-1">{property.size}</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-2 mb-2 px-[20px] flex justify-between items-center">
        <div className="flex flex-col items-start">
          <span className="line-through text-[#696969] text-xs">
            {property.oldPrice}
          </span>
          <span className="text-[16px] font-[600] text-[#0D263B]">
            {property.price}
          </span>
        </div>
        <div className="flex items-center gap-[20px] ">
          <label className="p-2 rounded-full  cursor-pointer border  transition duration-30 bg-[#fff] shadow-md flex items-center justify-center w-9 h-9">
            <input type="checkbox" className="hidden peer" />
            <CgArrowsExpandRight className=" text-[#696969]  transition-colors text-lg" />
          </label>
          <label className="p-2 rounded-full  cursor-pointer border transition duration-300 bg-[#fff] shadow-md flex items-center justify-center w-9 h-9">
            <input type="checkbox" className="hidden peer" />
            <FaHeart className="peer-checked:text-red-500 text-[#696969] transition-colors text-lg" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card
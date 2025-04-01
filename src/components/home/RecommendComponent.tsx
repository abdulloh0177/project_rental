"use client"
import React, { useEffect } from 'react'
import RentCarusel from '../ui/RentCarusel'
const RecommendComponent = ({title,description}:{title:string,description:string}) => {
  return (
    <div className=" text-center mt-[96px]">
      <div className="container">
        <div className="w-full"  data-aos="zoom-out-down">
          <h2 className="text-[#0D263B] font-[600] text-[28px]">{title}</h2>
          <p className="text-[#696969] text-sm font-[400] mt-[8px]">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-[32px] mb-[46px]">
        <RentCarusel />
      </div>
    </div>
  );
}

export default RecommendComponent
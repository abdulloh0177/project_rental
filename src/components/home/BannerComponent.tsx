import React from 'react'
import Image from 'next/image'
import BigBannerImage from "@/assets/images/Banner2Img.png"
import CustomButton from '../ui/customButton';
const BannerComponent = () => {
  return (
    <div className="w-full  mb-[96px] relative">
      <div className="w-full big-banner">
        <Image
          className="w-full h-full"
          src={BigBannerImage}
          alt="big-banner image"
        />
      </div>
      <div className="absolute inset-0 flex text-center flex-col items-center justify-center">
        <h2
          data-aos="fade-right"
          className="text-[#fff] mx-[20px] max-w-[565px] font-[600] text-[28px] mb-[48px]"
        >
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </h2>
        <div  data-aos="zoom-out-up">
          <CustomButton
            icon={false}
            text="Read more"
            px="58"
            buttonSize="lg"
            type="button"
          />
        </div>
      </div>
    </div>
  );
}

export default BannerComponent
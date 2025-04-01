import React from "react";
import Image from "next/image";
import ProductViewImage from "@/assets/images/productView.png";
import ViewImage2 from "@/assets/images/view2.png";
import ViewImage3 from "@/assets/images/view3.png";
import ViewImage4 from "@/assets/images/view4.png";
import ViewImage5 from "@/assets/images/view5.png";

const ProportyImages = () => {
  return (
    <div className="mb-8 grid grid-cols-1 gap-[20px] md:grid-cols-4 md:grid-rows-2">
      <div className="relative overflow-hidden md:col-span-2 md:row-span-2">
        <Image
          src={ProductViewImage}
          alt="Main property view"
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover cursor-pointer transition-all duration-700  hover:scale-110 hover:brightness-50"
        />
      </div>
      <div className="relative overflow-hidden hidden md:block">
        <Image
          src={ViewImage2}
          alt="Property view"
          width={400}
          height={300}
          loading="lazy"
          className="h-full w-full cursor-pointer transition-all duration-700 hover:scale-110 hover:brightness-50 object-cover"
        />
      </div>
      <div className="relative overflow-hidden hidden md:block">
        <Image
          src={ViewImage3}
          alt="Property view"
          width={400}
          loading="lazy"
          height={300}
          className="h-full w-full object-cover cursor-pointer transition-all duration-700 hover:scale-110 hover:brightness-50"
        />
      </div>
      <div className="relative overflow-hidden hidden md:block">
        <Image
          src={ViewImage4}
          alt="Property view"
          width={400}
          height={300}
          loading="lazy"
          className="h-full w-full object-cover cursor-pointer transition-all duration-700 hover:scale-110 hover:brightness-50 "
        />
      </div>
      <div className="relative overflow-hidden hidden md:block">
        <Image
          src={ViewImage5}
          alt="Property view"
          width={400}
          height={300}
          loading="lazy"
          className="h-full w-full object-cover cursor-pointer transition-all duration-700 hover:scale-110 hover:brightness-50"
        />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center rounded-lg bg-black/50">
          <span className="text-xl font-medium text-white">+15</span>
        </div>
      </div>
    </div>
  );
};

export default ProportyImages;

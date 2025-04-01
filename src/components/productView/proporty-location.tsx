import React from 'react'
import Image from 'next/image';
import MapIMage from "@/assets/images/imgMap.png";

const ProportyLocation = () => {
  return (
    <div className="mb-12">
      <h2
        data-aos="zoom-out-left"
        className="mb-4 text-xl primary-color font-semibold"
      >
        Location
      </h2>
      <div className="grid grid-cols-1 gap-4  md:flex md:items-center md:justify-between">
        <div className="flex flex-col gap-4">
          <div
            data-aos-duration="600"
            data-aos="fade-up"
            className="flex items-center gap-2"
          >
            <p className="text-sm  font-bold primary-color">Address:</p>
            <p className="secondary-color">329 Queensberry Street</p>
          </div>
          <div
            data-aos-duration="900"
            data-aos="fade-up"
            className="flex items-center gap-2"
          >
            <p className="text-sm font-bold primary-color">City:</p>
            <p className="secondary-color">Jersey City</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            data-aos-duration="600"
            data-aos="fade-up"
            className="flex items-center gap-2"
          >
            <p className="text-sm primary-color font-bold">State/County:</p>
            <p className="secondary-color">Washington</p>
          </div>
          <div
            data-aos-duration="900"
            data-aos="fade-up"
            className="flex items-center gap-2"
          >
            <p className="text-sm font-bold primary-color">Zip:</p>
            <p className="secondary-color">98448</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            data-aos-duration="600"
            data-aos="fade-up"
            className="flex items-center gap-2"
          >
            <p className="text-sm font-bold primary-color">Area:</p>
            <p className="secondary-color">Greenville</p>
          </div>
          <div
            data-aos-duration="900"
            data-aos="fade-up"
            className="flex items-center gap-2"
          >
            <p className="text-sm font-bold primary-color">Country:</p>
            <p className="secondary-color">United States</p>
          </div>
        </div>
      </div>
      <div className="mt-6 h-64  md:h-[370px] lg:h-[420px] w-full rounded-[3px] bg-muted">
        <Image
          src={MapIMage}
          alt="Map"
          width={880}
          height={420}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default ProportyLocation
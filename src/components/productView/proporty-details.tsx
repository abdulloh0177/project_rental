import React from 'react'

const ProportyDetails = () => {
  return (
    <div className="mb-8 mt-10">
      <h2
        data-aos="zoom-out-left"
        className="mb-4 text-xl primary-color font-semibold"
      >
        Property Details
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div
          data-aos-duration="800"
          data-aos="fade-up"
          className="flex items-center gap-2"
        >
          <p className="text-sm font-bold primary-color">Property ID:</p>
          <p className="secondary-color">L1277</p>
        </div>
        <div
          data-aos-duration="800"
          data-aos="fade-up"
          className="flex items-center gap-2"
        >
          <p className="text-sm font-bold primary-color">Bedrooms:</p>
          <p className="secondary-color">8</p>
        </div>
        <div
          data-aos-duration="800"
          data-aos="fade-up"
          className="flex items-center gap-2"
        >
          <p className="text-sm font-bold primary-color">Property Type:</p>
          <p className="secondary-color">Apartment</p>
        </div>
        <div
          data-aos-duration="800"
          data-aos="fade-up"
          className="flex items-center gap-2"
        >
          <p className="text-sm font-bold primary-color">Price:</p>
          <p className="secondary-color">$130,000</p>
        </div>
        <div
          data-aos-duration="800"
          data-aos="fade-up"
          className="flex items-center gap-2"
        >
          <p className="text-sm font-bold primary-color">Bathrooms:</p>
          <p className="secondary-color">6</p>
        </div>
        <div
          data-aos-duration="800"
          data-aos="fade-up"
          className="flex items-center gap-2"
        >
          <p className="text-sm font-bold primary-color">Property Status:</p>
          <p className="secondary-color">For Sale</p>
        </div>
        <div
          data-aos-duration="800"
          data-aos="fade-up"
          className="flex items-center gap-2"
        >
          <p className="text-sm font-bold primary-color">Property Size:</p>
          <p className="secondary-color">1950 Sq Ft</p>
        </div>
        <div
          data-aos-duration="800"
          data-aos="fade-up"
          className="flex items-center gap-2"
        >
          <p className="text-sm font-bold primary-color">Garage:</p>
          <p className="secondary-color">4</p>
        </div>
        <div
          data-aos-duration="800"
          data-aos="fade-up"
          className="flex items-center gap-2"
        >
          <p className="text-sm font-bold primary-color">Garage size:</p>
          <p className="secondary-color">200 SqFt</p>
        </div>
        <div
          data-aos-duration="800"
          data-aos="fade-up"
          className="flex items-center gap-2"
        >
          <p className="text-sm font-bold primary-color">Year Built:</p>
          <p className="secondary-color">2021-01-09</p>
        </div>
      </div>
    </div>
  );
}

export default ProportyDetails
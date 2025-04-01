"use client";

import { useState, useEffect } from "react";
import PropertyCard from "./property-card";
import PropertyCardMobile from "./property-card-mobile";
import { useMediaQuery } from "react-responsive";

const properties = [
  {
    id: 1,
    title: "New Apartment Nice View",
    address: "Quincy St, Brooklyn, NY, USA",
    originalPrice: "$2,800/mo",
    currentPrice: "$7,500/mo",
    datePublished: "30 December 2022",
    status: "Pending",
    views: "5933",
    featured: true,
    forSale: true,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "New Apartment Nice View",
    address: "Quincy St, Brooklyn, NY, USA",
    originalPrice: "$2,800/mo",
    currentPrice: "$7,500/mo",
    datePublished: "30 December 2022",
    status: "Pending",
    views: "5933",
    featured: true,
    forSale: true,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "New Apartment Nice View",
    address: "Quincy St, Brooklyn, NY, USA",
    originalPrice: "$2,800/mo",
    currentPrice: "$7,500/mo",
    datePublished: "30 December 2022",
    status: "Pending",
    views: "5933",
    featured: true,
    forSale: true,
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function ResponsivePropertyList() {
  const [propertyData] = useState(properties);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  if (isMobile) {
    return (
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <h2 className="font-medium text-slate-800">Listing Title</h2>
        </div>

        <div>
          {propertyData.map((property) => (
            <PropertyCardMobile key={property.id} property={property} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      <div className="grid grid-cols-5 bg-white p-4 border-b border-slate-200">
        <div className="font-medium text-slate-800">Listing Title</div>
        <div className="font-medium text-slate-800">Date Published</div>
        <div className="font-medium text-slate-800">Status</div>
        <div className="font-medium text-slate-800">View</div>
        <div className="font-medium text-slate-800">Action</div>
      </div>

      <div className="divide-y divide-slate-100">
        {propertyData.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

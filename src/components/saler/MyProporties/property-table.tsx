"use client";

import { useState } from "react";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";

// Mock data for properties
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

export default function PropertyTable() {
  const [propertyData] = useState(properties);

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Table Header */}
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left p-4 font-medium text-slate-800 w-[40%]">
                Listing Title
              </th>
              <th className="text-left p-4 font-medium text-slate-800 w-[15%]">
                Date Published
              </th>
              <th className="text-center p-4 font-medium text-slate-800 w-[15%]">
                Status
              </th>
              <th className="text-center p-4 font-medium text-slate-800 w-[15%]">
                View
              </th>
              <th className="text-center p-4 font-medium text-slate-800 w-[15%]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {propertyData.map((property) => (
              <tr
                key={property.id}
                className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
              >
                {/* Listing Title */}
                <td className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-[100px] h-[100px] bg-slate-200 rounded-md overflow-hidden">
                        <Image
                          src={property.image || "/placeholder.svg"}
                          alt={property.title}
                          width={100}
                          height={100}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      {property.featured && (
                        <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-0.5 font-semibold rounded">
                          FEATURED
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-slate-800">
                          {property.title}
                        </h3>
                        {property.forSale && (
                          <div className="bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded">
                            FOR SALE
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-slate-500 mb-1">
                        {property.address}
                      </p>
                      <div>
                        <span className="text-xs text-slate-400 line-through mr-2">
                          {property.originalPrice}
                        </span>
                        <span className="text-sm font-semibold">
                          {property.currentPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>

                {/* Date Published */}
                <td className="p-4 text-sm text-slate-600">
                  {property.datePublished}
                </td>

                {/* Status */}
                <td className="p-4 text-center">
                  <div className="inline-block bg-amber-50 text-amber-600 border border-amber-200 text-xs px-3 py-1 rounded">
                    {property.status}
                  </div>
                </td>

                {/* View */}
                <td className="p-4 text-sm text-slate-600 text-center">
                  {property.views}
                </td>

                {/* Action */}
                <td className="p-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-2 rounded-full cursor-pointer hover:bg-slate-100 text-slate-500 hover:text-blue-600 transition-colors">
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </button>

                    <button className="p-2 rounded-full cursor-pointer hover:bg-slate-100 text-slate-500 hover:text-red-600 transition-colors">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="p-4 border-b border-slate-200">
          <h2 className="font-medium text-slate-800">Listing Title</h2>
        </div>

        {propertyData.map((property) => (
          <div key={property.id} className="flex p-4 border-b border-slate-200">
            <div className="relative">
              <div className="w-[80px] h-[80px] bg-slate-200 rounded-md overflow-hidden">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              {property.featured && (
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-0.5 font-semibold rounded">
                  FEATURED
                </div>
              )}
            </div>

            <div className="flex-1 ml-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-slate-800 text-sm">
                    {property.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-1">
                    {property.address}
                  </p>
                  <div>
                    <span className="text-xs text-slate-400 line-through mr-2">
                      {property.originalPrice}
                    </span>
                    <span className="text-sm font-semibold">
                      {property.currentPrice}
                    </span>
                  </div>
                </div>

                <div className="flex gap-1">
                  <button className="p-2 hover:bg-slate-100 hover:text-blue-600 transition-colors cursor-pointer rounded-full text-slate-500">
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </button>

                  <button className="p-2 cursor-pointer hover:bg-slate-100 hover:text-red-600 transition-colors rounded-full text-slate-500">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span> 
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

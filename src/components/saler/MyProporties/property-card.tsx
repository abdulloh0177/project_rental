"use client";

import { useState } from "react";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    address: string;
    originalPrice: string;
    currentPrice: string;
    datePublished: string;
    status: string;
    views: string;
    featured: boolean;
    forSale: boolean;
    image: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="grid grid-cols-5 items-center py-4 transition-all duration-200 hover:bg-slate-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Listing Title Column */}
      <div className="flex items-start gap-4 pl-4">
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
            <h3 className="font-medium text-slate-800">{property.title}</h3>
            {property.forSale && (
              <div className="bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded">
                FOR SALE
              </div>
            )}
          </div>
          <p className="text-sm text-slate-500 mb-1">{property.address}</p>
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

      {/* Date Published Column */}
      <div className="text-sm text-slate-600">{property.datePublished}</div>

      {/* Status Column */}
      <div>
        <div className="inline-block bg-amber-50 text-amber-600 border border-amber-200 text-xs px-3 py-1 rounded">
          {property.status}
        </div>
      </div>

      {/* View Column */}
      <div className="text-sm text-slate-600">{property.views}</div>

      {/* Action Column */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className={`rounded-full cursor-pointer transition-all duration-300 ${
            isHovered ? "text-blue-600 hover:bg-blue-50" : "text-slate-500"
          }`}
        >
          <Pencil className="h-4 w-4" />
          <span className="sr-only">Edit</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className={`rounded-full cursor-pointer transition-all duration-300 ${
            isHovered ? "text-red-600 hover:bg-red-50" : "text-slate-500"
          }`}
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Delete</span>
        </Button>
      </div>
    </div>
  );
}

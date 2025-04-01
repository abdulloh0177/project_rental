"use client";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardMobileProps {
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

export default function PropertyCardMobile({
  property,
}: PropertyCardMobileProps) {
  return (
    <div className="flex p-4 border-b border-slate-200">
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
            <p className="text-xs text-slate-500 mb-1">{property.address}</p>
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
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 cursor-pointer rounded-full"
            >
              <Pencil className="h-4 w-4 text-slate-500" />
              <span className="sr-only">Edit</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 cursor-pointer rounded-full"
            >
              <Trash2 className="h-4 w-4 text-slate-500" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

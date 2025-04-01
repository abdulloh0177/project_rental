"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import MapImage from "@/assets/images/maps.png"
declare global {
  interface Window {
    google: any;
  }
}

export default function LocationInformation({ form }: { form: any }) {
  const [mapCoordinates, setMapCoordinates] = useState({
    lat: 37.7749,
    lng: -122.4194,
  });
  const {
    formState: { errors },
  } = form;

  return (
    <Card className="rounded-[3px]">
      <CardHeader>
        <CardTitle data-aos="zoom-out-left">Location</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Select
              onValueChange={(value) => form.setValue("region", value)}
              defaultValue={form.getValues("region")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Regions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="north">North</SelectItem>
                <SelectItem value="south">South</SelectItem>
                <SelectItem value="east">East</SelectItem>
                <SelectItem value="west">West</SelectItem>
                <SelectItem value="central">Central</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Input
              placeholder="Friendly address"
              {...form.register("friendlyAddress", {
                required: "Address is required",
              })}
              className={errors.friendlyAddress ? "border-red-500" : ""}
            />
            {errors.friendlyAddress && (
              <p className="text-red-500 text-xs mt-1">
                {errors.friendlyAddress.message as string}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Label className="text-sm text-[#696969] mb-2 block">
            Map location
          </Label>
          <div className="h-[400px] max-sm:h-[300px] w-full overflow-hidden rounded-md bg-gray-100 relative">
            <div className="absolute inset-0 bg-gray-200">
              <Image
                src={MapImage}
                alt="Map"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600">
                <MapPin size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Input placeholder="Latitude" {...form.register("latitude")} />
          </div>

          <div>
            <Input placeholder="Longitude" {...form.register("longitude")} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

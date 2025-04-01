"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdditionalInformation({ form }: { form: any }) {
  const {
    formState: { errors },
  } = form;

  return (
    <Card className="rounded-[3px]">
      <CardHeader>
        <CardTitle data-aos="zoom-out-left">Additional</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <Input
              placeholder="Property ID"
              {...form.register("propertyId")}
              className={errors.propertyId ? "border-red-500" : ""}
            />
            {errors.propertyId && (
              <p className="text-red-500 text-xs mt-1">
                {errors.propertyId.message as string}
              </p>
            )}
          </div>

          <div>
            <Select
              onValueChange={(value) => form.setValue("parentProperty", value)}
              defaultValue={form.getValues("parentProperty")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Parent property" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="property1">Property 1</SelectItem>
                <SelectItem value="property2">Property 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select
              onValueChange={(value) => form.setValue("status", value)}
              defaultValue={form.getValues("status")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="sold">Sold</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <Input placeholder="Label" {...form.register("label")} />
          </div>

          <div>
            <Input placeholder="Material" {...form.register("material")} />
          </div>

          <div>
            <Input
              placeholder="Rooms"
              type="number"
              {...form.register("rooms")}
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <Input
              placeholder="Beds"
              type="number"
              {...form.register("beds")}
            />
          </div>

          <div>
            <Input
              placeholder="Baths"
              type="number"
              {...form.register("baths")}
            />
          </div>

          <div>
            <Input
              placeholder="Garages"
              type="number"
              {...form.register("garages")}
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <Input
              placeholder="Year build"
              type="number"
              {...form.register("yearBuild")}
            />
          </div>

          <div>
            <Input
              placeholder="Home area (sqft)"
              type="number"
              {...form.register("homeArea")}
            />
          </div>

          <div>
            <Input
              placeholder="Lot dimensions"
              {...form.register("lotDimensions")}
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <Input
              placeholder="Lot area (sqft)"
              type="number"
              {...form.register("lotArea")}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

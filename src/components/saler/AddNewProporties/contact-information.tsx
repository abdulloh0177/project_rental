"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactInformation({ form }: { form: any }) {
  const {
    formState: { errors },
  } = form;

  return (
    <Card className="rounded-[3px]">
      <CardHeader>
        <CardTitle data-aos="zoom-out-left">Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Input
              placeholder="Property title*"
              {...form.register("propertyTitle", {
                required: "Property title is required",
              })}
              className={errors.propertyTitle ? "border-red-500" : ""}
            />
            {errors.propertyTitle && (
              <p className="text-red-500 text-xs mt-1">
                {errors.propertyTitle.message as string}
              </p>
            )}
          </div>

          <div>
            <Select
              onValueChange={(value) => form.setValue("propertyType", value)}
              defaultValue={form.getValues("propertyType")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="land">Land</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Textarea
            placeholder="Property Description*"
            className={`min-h-[120px] ${
              errors.propertyDescription ? "border-red-500" : ""
            }`}
            {...form.register("propertyDescription", {
              required: "Property description is required",
            })}
          />
          {errors.propertyDescription && (
            <p className="text-red-500 text-xs mt-1">
              {errors.propertyDescription.message as string}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

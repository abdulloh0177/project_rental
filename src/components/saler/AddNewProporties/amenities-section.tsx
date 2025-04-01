import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function AmenitiesSection({ form }: { form: any }) {
  const amenities = [
    { id: "airConditioning", label: "Air conditioning" },
    { id: "barbecue", label: "Barbecue" },
    { id: "dryer", label: "Dryer" },
    { id: "gym", label: "Gym" },
    { id: "laundry", label: "Laundry" },
    { id: "lawn", label: "Lawn" },
    { id: "microwave", label: "Microwave" },
    { id: "outdoorShower", label: "Outdoor Shower" },
    { id: "refrigerator", label: "Refrigerator" },
    { id: "stunningViews", label: "Stunning views" },
    { id: "diningRoom", label: "Dining Room" },
    { id: "fireplace", label: "Fireplace" },
    { id: "petsAllowed", label: "Pets Allowed" },
    { id: "unitWasherDryer", label: "Unit Washer/Dryer" },
    { id: "onSiteParking", label: "Onsite Parking" },
    { id: "waterfront", label: "Waterfront" },
    { id: "parking", label: "Parking" },
    { id: "doorman", label: "Doorman" },
    { id: "centralHeating", label: "Central Heating" },
    { id: "cleaningService", label: "Cleaning Service" },
  ];

  return (
    <Card className="rounded-[3px]">
      <CardHeader>
        <CardTitle data-aos="zoom-out-left">Amenities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="flex items-center space-x-2">
              <Checkbox
                id={amenity.id}
                checked={form.watch(`amenities.${amenity.id}`)}
                onCheckedChange={(checked) => {
                  form.setValue(`amenities.${amenity.id}`, checked);
                }}
              />
              <Label
                htmlFor={amenity.id}
                className="text-sm font-normal text-[#696969]"
              >
                {amenity.label}
              </Label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

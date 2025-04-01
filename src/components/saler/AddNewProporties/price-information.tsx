import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function PriceInformation({ form }: { form: any }) {
  const {
    formState: { errors },
  } = form;

  return (
    <Card className="rounded-[3px]">
      <CardHeader>
        <CardTitle data-aos="zoom-out-left">Price</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Input
              placeholder="Price ($)"
              type="number"
              {...form.register("price", {
                required: "Price is required",
              })}
              className={errors.price ? "border-red-500" : ""}
            />
            {errors.price && (
              <p className="text-red-500 text-xs mt-1">
                {errors.price.message as string}
              </p>
            )}
          </div>

          <div>
            <Input
              placeholder="Price Prefix"
              {...form.register("pricePrefix")}
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Input
              placeholder="Price Suffix"
              {...form.register("priceSuffix")}
            />
          </div>

          <div>
            <Input
              placeholder="Price Custom"
              {...form.register("priceCustom")}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function EnergySection({ form }: { form: any }) {
  return (
    <Card className="rounded-[3px]">
      <CardHeader>
        <CardTitle data-aos="zoom-out-left">Select Energy Class</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Input
              placeholder="Energy class"
              {...form.register("energyClass")}
            />
          </div>

          <div>
            <Input
              placeholder="Energy index in kWh/m2a"
              {...form.register("energyIndex")}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

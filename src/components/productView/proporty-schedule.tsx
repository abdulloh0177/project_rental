"use client"
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomButton from "@/components/ui/customButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
interface TourFormValues {
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ProportySchedule = () => {
  const tourForm = useForm<TourFormValues>({
    defaultValues: {
      date: "",
      time: "10:00 am",
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onTourSubmit: SubmitHandler<TourFormValues> = (data) => {
    console.log("Tour form data:", data);

    toast.success("Your tour request has been submitted", {
      description: "We'll get back to you shortly",
    });

    // Reset form
    tourForm.reset({
      date: "",
      time: "10:00 am",
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="mb-8 mt-10">
      <h2 data-aos="zoom-out-left" className="mb-4 text-xl font-semibold">
        Schedule A Tour
      </h2>
      <Form {...tourForm}>
        <form
          onSubmit={tourForm.handleSubmit(onTourSubmit)}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={tourForm.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={tourForm.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="9:00 am">9:00 am</SelectItem>
                      <SelectItem value="10:00 am">10:00 am</SelectItem>
                      <SelectItem value="11:00 am">11:00 am</SelectItem>
                      <SelectItem value="12:00 pm">12:00 pm</SelectItem>
                      <SelectItem value="1:00 pm">1:00 pm</SelectItem>
                      <SelectItem value="2:00 pm">2:00 pm</SelectItem>
                      <SelectItem value="3:00 pm">3:00 pm</SelectItem>
                      <SelectItem value="4:00 pm">4:00 pm</SelectItem>
                      <SelectItem value="5:00 pm">5:00 pm</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <h3 className="text-[16px] font-bold">Your Information</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <FormField
              control={tourForm.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={tourForm.control}
              name="phone"
              rules={{ required: "Phone is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={tourForm.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={tourForm.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Your Message</FormLabel>
                <FormControl>
                  <Textarea
                    style={{ borderRadius: "3px" }}
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div
            data-aos="zoom-out-up"
            className="flex sm:justify-between justify-center w-full"
          >
            <CustomButton
              type="submit"
              text="Submit a tour request"
              icon={false}
              px="48px"
              buttonSize="default"
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProportySchedule;

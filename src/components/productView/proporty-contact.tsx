"use client"
import React from "react";
import CustomButton from "@/components/ui/customButton";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, type SubmitHandler } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import AvatarImage from "@/assets/images/avatar.svg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { toast } from "sonner";
import { useMediaQuery } from "react-responsive";

interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
  agreeToTerms: boolean;
}

const ProportyContact = () => {
  const isDesktop = useMediaQuery({ maxWidth: 1285 });

  const contactForm = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "Hello, I am interested in [New Apartment]",
      agreeToTerms: false,
    },
  });
  const onContactSubmit: SubmitHandler<ContactFormValues> = (data) => {
    // Here you would send the data to your backend
    console.log("Contact form data:", data);

    // Show success message
    toast.success("Your request has been sent successfully", {
      description: "We'll get back to you shortly",
    });

    // Reset form
    contactForm.reset({
      name: "",
      phone: "",
      email: "",
      message: "Hello, I am interested in [New Apartment]",
      agreeToTerms: false,
    });
  };

  return (
    <div className="max-w-[320px] hidden lg:inline-block">
      <Card>
        <CardContent className="p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-12 overflow-hidden rounded-full bg-muted">
              <Image
                src={AvatarImage}
                alt="Agent"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">Darrel Steward</h3>
              <p className="text-sm text-muted-foreground">(123)456-7890</p>
            </div>
          </div>
          <Form {...contactForm}>
            <form
              onSubmit={contactForm.handleSubmit(onContactSubmit)}
              className="space-y-4"
            >
              <FormField
                control={contactForm.control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
                name="phone"
                rules={{ required: "Phone is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
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
                      <Input
                        placeholder="Enter your email"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your message"
                        className="min-h-24"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
                name="agreeToTerms"
                rules={{ required: "You must agree to the terms" }}
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-xs text-muted-foreground">
                        By submitting this form I agree to Terms of Use
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <div className="flex  justify-center w-full">
                <CustomButton
                  type="submit"
                  text="Send request"
                  icon={false}
                  px={isDesktop ? "40px" : "72px"}
                  buttonSize="default"
                />
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProportyContact;

"use client"
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { StarRating } from "@/components/ui/starRating";
import { useForm, type SubmitHandler } from "react-hook-form";
import AvatarImage from "@/assets/images/avatar.svg";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomButton from "@/components/ui/customButton";
import Image from "next/image";

interface ReviewFormValues {
  cleanliness: number;
  accuracy: number;
  communication: number;
  location: number;
  checkIn: number;
  value: number;
  name: string;
  email: string;
  message: string;
}

const ProductReview = () => {
  const [ratings, setRatings] = useState({
    cleanliness: 0,
    accuracy: 0,
    communication: 0,
    location: 0,
    checkIn: 0,
    value: 0,
  });

  const reviewForm = useForm<ReviewFormValues>({
    defaultValues: {
      cleanliness: 0,
      accuracy: 0,
      communication: 0,
      location: 0,
      checkIn: 0,
      value: 0,
      name: "",
      email: "creativelayers018@gmail.com",
      message: "",
    },
  });

  // Handle star rating changes
  const handleRatingChange = (category: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [category]: rating }));
    reviewForm.setValue(category as keyof ReviewFormValues, rating, {
      shouldValidate: true,
    });
  };
  const onReviewSubmit: SubmitHandler<ReviewFormValues> = (data) => {
    // Combine form data with ratings
    const reviewData = {
      ...data,
      ...ratings,
    };

    // Validate ratings
    if (Object.values(ratings).some((rating) => rating === 0)) {
      toast.error("Please rate all categories");
      return;
    }

    // Here you would send the data to your backend
    console.log("Review form data:", reviewData);

    // Show success message
    toast.success("Your review has been submitted", {
      description: "Thanks for your feedback!",
    });

    // Reset form
    reviewForm.reset();
    setRatings({
      cleanliness: 0,
      accuracy: 0,
      communication: 0,
      location: 0,
      checkIn: 0,
      value: 0,
    });
  };

  return (
    <div className="mb-8 mt-10">
      <div data-aos="zoom-out-left" className="mb-4 flex items-center gap-2">
        <h2 className="text-xl font-semibold">4.67 (14 reviews)</h2>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 gap-x-16 md:grid-cols-2">
        <div className="mb-2 grid grid-cols-2">
          <div>
            <span>Cleanliness</span>
          </div>
          <div className="flex items-center gap-2">
            <Progress
              value={82}
              className="h-2 bg-gray-200"
              indicatorClassName="bg-blue-500"
            />
            <span>4.7</span>
          </div>
        </div>
        <div className="mb-2 grid grid-cols-2">
          <div>
            <span>Accuracy</span>
          </div>
          <div className="flex items-center gap-2">
            <Progress
              value={82}
              className="h-2 bg-gray-200"
              indicatorClassName="bg-blue-500"
            />
            <span>4.7</span>
          </div>
        </div>
        <div className="mb-2 grid grid-cols-2">
          <div>
            <span>Communication</span>
          </div>
          <div className="flex items-center gap-2">
            <Progress
              value={90}
              className="h-2 bg-gray-200"
              indicatorClassName="bg-blue-500"
            />
            <span>4.9</span>
          </div>
        </div>
        <div className="mb-2 grid grid-cols-2">
          <div>
            <span>Location</span>
          </div>
          <div className="flex items-center gap-2">
            <Progress
              value={90}
              className="h-2 bg-gray-200"
              indicatorClassName="bg-blue-500"
            />
            <span>4.9</span>
          </div>
        </div>
        <div className="mb-2 grid grid-cols-2">
          <div>
            <span>Check-in</span>
          </div>
          <div className="flex items-center gap-2">
            <Progress
              value={90}
              className="h-2 bg-gray-200"
              indicatorClassName="bg-blue-500"
            />
            <span>4.9</span>
          </div>
        </div>
        <div className="mb-2 grid grid-cols-2">
          <div>
            <span>Value</span>
          </div>
          <div className="flex items-center gap-2">
            <Progress
              value={90}
              className="h-2 bg-gray-200"
              indicatorClassName="bg-blue-500"
            />
            <span>4.9</span>
          </div>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-[3px] border p-4">
          <div className="mb-4 flex items-end gap-3">
            <div>
              <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                <Image
                  src={AvatarImage}
                  alt="Jane Cooper"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-2">
                <h3 className="font-semibold">Jane Cooper</h3>
                <p className="text-sm text-muted-foreground">
                  April 6, 2021 at 3:21 AM
                </p>
              </div>
            </div>
            <div className="ml-auto flex">
              <StarRating rating={5} />
              <span className="ml-1 text-xs text-muted-foreground">
                (5 reviews)
              </span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            Every single thing we tried with John was delicious! Found some
            awesome places we would definitely go back to on our trip. John was
            also super friendly and passionate about Beşiktaş and Istanbul.{" "}
          </p>
        </div>
        <div className="rounded-[3px] border p-4">
          <div className="mb-4 flex items-end gap-3">
            <div>
              <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                <Image
                  src={AvatarImage}
                  alt="Jane Cooper"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-2">
                <h3 className="font-semibold">Jane Cooper</h3>
                <p className="text-sm text-muted-foreground">
                  April 6, 2021 at 3:21 AM
                </p>
              </div>
            </div>
            <div className="ml-auto flex">
              <StarRating rating={5} />
              <span className="ml-1 text-xs text-muted-foreground">
                (5 reviews)
              </span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            Every single thing we tried with John was delicious! Found some
            awesome places we would definitely go back to on our trip. John was
            also super friendly and passionate about Beşiktaş and Istanbul.{" "}
          </p>
        </div>
      </div>

      <Separator />

      {/* Write a Review */}
      <div className="mt-10">
        <h2 data-aos="zoom-out-left" className="mb-4 text-xl font-semibold">
          Write a Review
        </h2>
        <Form {...reviewForm}>
          <form
            onSubmit={reviewForm.handleSubmit(onReviewSubmit)}
            className="space-y-6"
          >
            <div className="mb-6 grid grid-cols-1  gap-4 gap-x-16 md:grid-cols-2">
              <div className="flex item-center w-full justify-between">
                <div className="mb-2 flex items-center justify-between">
                  <span>Cleanliness</span>
                </div>
                <StarRating
                  rating={ratings.cleanliness}
                  editable
                  onChange={(rating) =>
                    handleRatingChange("cleanliness", rating)
                  }
                />
              </div>
              <div className="flex items-center w-full justify-between">
                <div className="mb-2 flex items-center justify-between">
                  <span>Accuracy</span>
                </div>
                <StarRating
                  rating={ratings.accuracy}
                  editable
                  onChange={(rating) => handleRatingChange("accuracy", rating)}
                />
              </div>
              <div className="flex items-center w-full justify-between">
                <div className="mb-2 flex items-center justify-between">
                  <span>Communication</span>
                </div>
                <StarRating
                  rating={ratings.communication}
                  editable
                  onChange={(rating) =>
                    handleRatingChange("communication", rating)
                  }
                />
              </div>
              <div className="flex items-center w-full justify-between">
                <div className="mb-2 flex items-center justify-between">
                  <span>Location</span>
                </div>
                <StarRating
                  rating={ratings.location}
                  editable
                  onChange={(rating) => handleRatingChange("location", rating)}
                />
              </div>
              <div className="flex items-center w-full justify-between">
                <div className="mb-2 flex items-center justify-between">
                  <span>Check-in</span>
                </div>
                <StarRating
                  rating={ratings.checkIn}
                  editable
                  onChange={(rating) => handleRatingChange("checkIn", rating)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="mb-2 flex items-center justify-between">
                  <span>Value</span>
                </div>
                <StarRating
                  rating={ratings.value}
                  editable
                  onChange={(rating) => handleRatingChange("value", rating)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={reviewForm.control}
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
                control={reviewForm.control}
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
              control={reviewForm.control}
              name="message"
              rules={{ required: "Message is required" }}
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
            <div data-aos="zoom-out-up" className="flex sm:justify-between justify-center w-full">
              <CustomButton
                type="submit"
                text="Send your review"
                icon={false}
                px="64px"
                buttonSize="default"
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProductReview;

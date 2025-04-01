"use client";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ContactInformation from "./contact-information";
import AdditionalInformation from "./additional-information";
import PriceInformation from "./price-information";
import LocationInformation from "./location-information";
import MediaSection from "./media-section";
import AmenitiesSection from "./amenities-section";
import EnergySection from "./energy-section";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Container() {
  const [isSubmitting, setIsSubmitting] = useState(false);
     useEffect(() => {
       Aos.init({
         duration:600,
         easing: "ease-out-cubic",
         delay:0,
         offset:80
       });
     }, []);

  const form = useForm({
    defaultValues: {
      // Contact Information
      propertyTitle: "",
      propertyType: "",
      propertyDescription: "",

      // Additional Information
      propertyId: "",
      parentProperty: "",
      status: "",
      label: "",
      material: "",
      rooms: "",
      beds: "",
      baths: "",
      garages: "",
      yearBuild: "",
      homeArea: "",
      lotDimensions: "",
      lotArea: "",

      // Price Information
      price: "",
      pricePrefix: "",
      priceSuffix: "",
      priceCustom: "",

      // Location Information
      region: "",
      friendlyAddress: "",
      mapLocation: "",
      latitude: "",
      longitude: "",

      // Media
      featuredImages: [],
      gallery: [],
      attachments: [],
      videoLink: "",
      virtualTour: "",

      // Amenities
      amenities: {
        airConditioning: false,
        barbecue: false,
        dryer: false,
        gym: false,
        laundry: false,
        lawn: false,
        microwave: false,
        outdoorShower: false,
        refrigerator: false,
        stunningViews: false,
        diningRoom: false,
        fireplace: false,
        petsAllowed: false,
        unitWasherDryer: false,
        onSiteParking: false,
        waterfront: false,
        parking: false,
        doorman: false,
        centralHeating: false,
        cleaningService: false,
      },

      // Energy
      energyClass: "",
      energyIndex: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    try {
      // Create a simplified version of the data for logging
      const simplifiedData = {
        ...data,
        // Convert file objects to simple strings to avoid circular references
        featuredImages: Array.isArray(data.featuredImages)
          ? `${data.featuredImages.length} images`
          : "No images",
        gallery: Array.isArray(data.gallery)
          ? `${data.gallery.length} images`
          : "No images",
        attachments: Array.isArray(data.attachments)
          ? `${data.attachments.length} files`
          : "No files",
      };

      console.log("Form submitted:", simplifiedData);

      // Show toast notification
      toast.success("Property Added Successfully", {
        description: `Property "${data.propertyTitle}" has been added.`,
      });

      // Reset form after successful submission if needed
      // form.reset()
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error", {
        description:
          "There was an error submitting the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmit = form.handleSubmit(onSubmit);

  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-6 mt-24 text-2xl font-bold">Add new property</h1>

      <form onSubmit={handleFormSubmit} className="space-y-8">
        <ContactInformation form={form} />
        <AdditionalInformation form={form} />
        <PriceInformation form={form} />
        <LocationInformation form={form} />
        <MediaSection form={form} />
        <AmenitiesSection form={form} />
        <EnergySection form={form} />

        <div data-aos="zoom-out-up" className="flex mb-[96px] justify-end">
          <Button
            type="submit"
            className="bg-blue-600 px-[50px] py-[22px] max-sm:w-full w-[280px] rounded-[3px] hover:bg-blue-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

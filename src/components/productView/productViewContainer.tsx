"use client"
import { Separator } from "@/components/ui/separator";
import ProportyImages from "@/components/productView/proporty-images";
import ProportyHeader from "@/components/productView/proporty-header";
import ProportyFeatures from "@/components/productView/proporty-features";
import ProportyDescription from "@/components/productView/proporty-description";
import ProportyDocuments from "@/components/productView/proporty-documents";
import ProportyLocation from "@/components/productView/proporty-location";
import ProportyDetails from "@/components/productView/proporty-details";
import ProportyFeatures2 from "@/components/productView/proporty-features2";
import ProportySchedule from "@/components/productView/proporty-schedule";
import ProportyReview from "@/components/productView/proporty-review";
import ProportyContact from "@/components/productView/proporty-contact";
import dynamic from "next/dynamic";
import PropertyCardsSkeleton from "../ui/SkeltonCard";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const RecommendComponentDynamic = dynamic(
  () => import("@/components/home/RecommendComponent"),
  { ssr: false, loading: () => <PropertyCardsSkeleton /> }
);

export default function ProductViewContainer() {
     useEffect(() => {
       Aos.init({
         duration:600,
         easing: "ease-out-cubic",
         delay:0,
         offset:80
       });
     }, []);
  return (
    <>
      <div className="container py-8 pt-24">
        <ProportyImages />
        <div className="grid grid-cols-1 gap-[32px] lg:grid-cols-4">
          <div className="lg:col-span-3 w-full">
            <ProportyHeader />
            <ProportyFeatures />
            <ProportyDescription />
            <ProportyDocuments />
            <ProportyLocation />
            <Separator />
            <ProportyDetails />
            <Separator />
            <ProportyFeatures2 />
            <Separator />
            <ProportySchedule />
            <Separator />
            <ProportyReview />
          </div>
          <ProportyContact />
        </div>
      </div>
      <RecommendComponentDynamic
        title="Similar listings"
        description="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
      />
    </>
  );
}

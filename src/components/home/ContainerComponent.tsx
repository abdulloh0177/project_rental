
"use client"
import React from 'react'
import SwiperComponent from "@/components/ui/Swipper";
import RecommendComponent from "@/components/home/RecommendComponent";
import FaqComponent from "@/components/home/FaqComponent";
import CategoryComonent from "@/components/home/CategoryComonent";
import BannerComponent from "@/components/home/BannerComponent";
import MessageComponent from "@/components/home/MessageComponent";
import dynamic from 'next/dynamic';
import { PropertyCardsSkeleton } from '../ui/SkeltonCard';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const RecommendComponentDynamic = dynamic(
  () => import("@/components/home/RecommendComponent"),
  { ssr: false, loading: () => <PropertyCardsSkeleton /> }
);

const ContainerComponent = () => {
   useEffect(() => {
     Aos.init({
       duration:600,
       easing: "ease-out-cubic",
       delay:0,
       offset:80
     });
   }, []);
  return (
    <div className="">
      <SwiperComponent />
      <RecommendComponentDynamic
        title="Recommended"
        description="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
      />
      <FaqComponent
        title="Why Choose Us?"
        description="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
      />
      <CategoryComonent
        title="Category"
        description="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
      />
      <BannerComponent />
      <RecommendComponentDynamic
        title="Recent Properties for Rent"
        description="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
      />
      <MessageComponent
        title="Testimonials"
        description="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
      />
    </div>
  );
}

export default ContainerComponent
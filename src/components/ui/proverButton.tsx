"use client"
import React, { ReactNode } from "react";
import { Button } from "./button";
import Image from "next/image";
import filterIcon from "@/assets/icons/filterIcon.svg";

interface ProverButtonProps {
  children?: ReactNode;
}

const ProverButton = ({ children }: ProverButtonProps) => {
  return (
    <Button
      className=" text-[#0D263B] h-[44px] hover:bg-none rounded-[2px] border-input hover:border-[#0061DF] active:scale-90 transition will-change:transform"
      variant="outline"
      size="lg"
      type="button"
    >
      <Image src={filterIcon} alt="filterIcon" />
      Advanced
      {children}
    </Button>
  );
};

export default ProverButton;

"use client"
import React from "react";
import { Button } from "./button";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { FiSearch } from "react-icons/fi";

const CustomButton = ({
  text,
  icon,
  type,
  px,
  buttonSize,
}: {
  text: string;
  icon: boolean;
  type: "submit" | "button";
  px: string;
  buttonSize: "default" | "lg" | "sm";
}) => {
    const isMobile = useMediaQuery({ maxWidth: 670 });

  return (
    <Button
      className=" text-[#fff] font-[400] h-[44px] rounded-[2px] flex items-center hover:text-[#fff]  border-input bg-[#0061DF] hover:bg-blue-800 active:scale-90 transition will-change:transform "
      variant="default"
      size={buttonSize}
      style={{ paddingLeft: !isMobile && px ? px : "32px", paddingRight:!isMobile && px ? px : "32px" }}
      type={`${type}`}
    >
      {icon && <FiSearch color="#fff" size={18} className="shrink-0"/>}
      {text}
    </Button>
  );
};

export default CustomButton;

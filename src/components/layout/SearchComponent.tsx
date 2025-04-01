"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import filterIcon from "@/assets/icons/filterIcon.svg";
import SearchIcon from "@/assets/icons/001-loupe.svg";
import Image from "next/image";
import { Label } from "../ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ProverButton from "../ui/proverButton";
import CustomButton from "../ui/customButton";
import { useForm } from "react-hook-form";

const SearchComponent = ({buttonSize}:{buttonSize:"default" | "lg" | "sm"}) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
      window.location.reload();

    console.log("Submitted Data:", data);
    // fetch("/api/apartments", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
  };

  return (
    <div className="container flex flex-wrap  items-center gap-[20px]">
      <div className="flex-grow">
        <Input
          id="icon"
          className="pl-10 !border h-[44px] max-w-full"
          type="text"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
        />{" "}
      </div>
      <div className="flex max-[668px]:w-full max-[668px]:gap-[0px] max-[668px]:justify-between  gap-[20px]">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className=" text-[#0D263B] hover:text-[#0061DF] h-[44px] hover:bg-none rounded-[2px] border-input hover:border-[#0061DF] active:scale-90 transition will-change:transform"
              variant="outline"
              size={buttonSize}
              type="button"
            >
              <Image src={filterIcon} alt="filterIcon" />
              Advanced
            </Button>
          </PopoverTrigger>
          <PopoverContent
            sideOffset={20}
            align="end"
            className="w-[920px] max-w-[95vw] p-0 left-1/2 translate-x-[1%]"
          >
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full flex flex-col gap-[20px] p-[30px]">
                <div className="w-full">
                  <Label className="font-[600]" htmlFor="width">
                    Address
                  </Label>
                  <div className="grid max-[910px]:grid-cols-2 mt-[10px] grid-cols-4 gap-[20px] ">
                    <Input
                      {...register("country")}
                      type="text"
                      placeholder="Country"
                    />
                    <Input
                      {...register("region")}
                      type="text"
                      placeholder="Region"
                    />
                    <Input
                      {...register("city")}
                      type="text"
                      placeholder="City"
                    />
                    <Input
                      {...register("zip_code")}
                      type="text"
                      placeholder="Zip code"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Label className="font-[600]" htmlFor="width">
                    Apartment info
                  </Label>
                  <div className="grid max-[910px]:grid-cols-2 mt-[10px] grid-cols-4 gap-[20px] ">
                    <Input
                      {...register("rooms")}
                      type="number"
                      placeholder="Rooms"
                    />
                    <Input
                      {...register("size")}
                      type="number"
                      placeholder="Size"
                    />
                    <Input
                      {...register("sort")}
                      type="text"
                      placeholder="Sort"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Label className="font-[600]" htmlFor="width">
                    Price
                  </Label>
                  <div className="grid max-[910px]:grid-cols-2 mt-[10px] grid-cols-4 gap-[20px] ">
                    <Input
                      {...register("min_price")}
                      type="number"
                      placeholder="Min price"
                    />
                    <Input
                      {...register("max_price")}
                      type="number"
                      placeholder="Max price"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full p-4 flex items-center justify-end gap-[20px] bg-[#F6F8F9] pt-[20px] pb-[20px]">
                <Button
                  className=" text-[#0D263B] px-[38px] h-[44px]  hover:bg-[#0D263B] hover:text-[#fff] rounded-[2px] border-[#0D263B]  active:scale-90 transition duration-300 will-change:transform"
                  variant="outline"
                  size="lg"
                  type="button"
                >
                  Cancel
                </Button>
                <CustomButton
                  px="38px"
                  type="submit"
                  text="Submit"
                  buttonSize="lg"
                  icon={false}
                />
              </div>
            </form>
          </PopoverContent>
        </Popover>
        <CustomButton buttonSize={buttonSize} px="50px" type="button" text="Search" icon={true} />
      </div>
    </div>
  );
};

export default SearchComponent;

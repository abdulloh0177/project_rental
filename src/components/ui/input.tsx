"use client"
import * as React from "react";
import RentalIcon from "@/assets/icons/rentIcon.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
function Input({
  className,
  type,
  id,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div className="relative">
      {id === "icon" && (
        <Image
          className="absolute left-3 top-1/2 -translate-y-1/2"
          src={RentalIcon}
          alt="rental-icon"
        />
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          // "file:text-foreground placeholder:[#0D263B] selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-[2px] border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          // "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          // "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          "flex h-10 w-full border-0 border-b border-gray-200 bg-transparent px-0 py-2 text-sm text-gray-800 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#696969] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Input };

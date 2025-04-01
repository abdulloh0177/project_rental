"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortDropdown = () => {
  return (
    <div className="relative w-full max-w-[230px]">
      <Select defaultValue="newest">
        <SelectTrigger className="flex items-center gap-0 w-full border-none focus:ring-0 text-[#696969] font-medium">
          <span className="text-[#0D263B] text-sm">Sort by:</span>
          <SelectValue placeholder="Newest Listings" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest Listings</SelectItem>
          <SelectItem value="oldest">Oldest Listings</SelectItem>
        </SelectContent>
      </Select>
      <div className="border-b mt-1 border-gray-300"></div>
    </div>
  );
};

export default SortDropdown;

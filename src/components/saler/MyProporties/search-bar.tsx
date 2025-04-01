"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full md:w-64 mt-2 md:mt-0">
      <Input
        type="text"
        placeholder="Search"
        className="border-slate-200"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

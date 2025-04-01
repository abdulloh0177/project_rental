import type { Metadata } from "next";
import SearchBar from "@/components/saler/MyProporties/search-bar";
import React from "react";
import PropertyTable from "@/components/saler/MyProporties/property-table";
export const metadata: Metadata = {
  title: "My Properties",
  description: "Manage your property listings",
};

const MyProportiespage = () => {
  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900">My properties</h1>
        <SearchBar />
      </div>

      <PropertyTable />
    </div>
  );
};

export default MyProportiespage;

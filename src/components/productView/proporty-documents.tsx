"use client"
import React from 'react'
import { LiaFileDownloadSolid } from "react-icons/lia";
import { toast } from "sonner";
import { Button } from '../ui/button';
import { Separator } from "@/components/ui/separator";
const ProportyDocuments = () => {
    const handleDownload = (documentName: string) => {
      // In a real application, this would trigger a file download
      console.log(`Downloading ${documentName}`);
      toast.info("Download started", {
        description: `Downloading ${documentName}`,
      });
    };

  return (
    <div className="mb-8">
      <h2 data-aos="zoom-out-left" className="mb-4 text-xl font-semibold">
        Documents
      </h2>
      <div className="space-y-4">
        <div data-aos="fade-up" className="flex items-center justify-between">
          <div className="flex items-center secondary-color gap-2">
            <LiaFileDownloadSolid className="h-5 w-5 text-muted-foreground" />
            <span>test_property.pdf</span>
          </div>
          <Button
            variant="link"
            size="sm"
            className="text-blue-600"
            onClick={() => handleDownload("test_property.pdf")}
          >
            DOWNLOAD
          </Button>
        </div>
        <Separator />
        <div data-aos="fade-up" className="flex items-center justify-between">
          <div className="flex items-center secondary-color gap-2">
            <LiaFileDownloadSolid className="h-5 w-5 text-muted-foreground" />
            <span>test_property.pdf2</span>
          </div>
          <Button
            variant="link"
            size="sm"
            className="text-blue-600"
            onClick={() => handleDownload("test_property.pdf")}
          >
            DOWNLOAD
          </Button>
        </div>
        <Separator />
        <div data-aos="fade-up" className="flex items-center justify-between">
          <div className="flex items-center secondary-color gap-2">
            <LiaFileDownloadSolid className="h-5 w-5 text-muted-foreground" />
            <span>test_property.pdf3</span>
          </div>
          <Button
            variant="link"
            size="sm"
            className="text-blue-600"
            onClick={() => handleDownload("test_property.pdf")}
          >
            DOWNLOAD
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProportyDocuments
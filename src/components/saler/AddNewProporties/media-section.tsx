"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, File, X } from "lucide-react";
import { Label } from "@/components/ui/label";
export default function MediaSection({ form }: { form: any }) {
  const [featuredImages, setFeaturedImages] = useState<string[]>([]);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [attachments, setAttachments] = useState<string[]>([
    "test_property.pdf",
  ]);

  const featuredImageRef = useRef<HTMLInputElement>(null);
  const galleryImageRef = useRef<HTMLInputElement>(null);
  const attachmentRef = useRef<HTMLInputElement>(null);

  const handleFeaturedImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setFeaturedImages((prev) => [...prev, ...newImages]);

      // Store only the file names to avoid circular references
      const fileNames = Array.from(e.target.files).map((file) => file.name);
      form.setValue("featuredImages", [
        ...(form.getValues("featuredImages") || []),
        ...fileNames,
      ]);
    }
  };

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setGalleryImages((prev) => [...prev, ...newImages]);

      // Store only the file names to avoid circular references
      const fileNames = Array.from(e.target.files).map((file) => file.name);
      form.setValue("gallery", [
        ...(form.getValues("gallery") || []),
        ...fileNames,
      ]);
    }
  };

  const handleAttachmentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newAttachments = Array.from(e.target.files).map(
        (file) => file.name
      );
      setAttachments((prev) => [...prev, ...newAttachments]);
      form.setValue("attachments", [
        ...(form.getValues("attachments") || []),
        ...newAttachments,
      ]);
    }
  };

  const removeImage = (index: number, type: "featured" | "gallery") => {
    if (type === "featured") {
      const newImages = [...featuredImages];
      newImages.splice(index, 1);
      setFeaturedImages(newImages);

      const currentFiles = form.getValues("featuredImages") || [];
      const newFiles = [...currentFiles];
      newFiles.splice(index, 1);
      form.setValue("featuredImages", newFiles);
    } else {
      const newImages = [...galleryImages];
      newImages.splice(index, 1);
      setGalleryImages(newImages);

      const currentFiles = form.getValues("gallery") || [];
      const newFiles = [...currentFiles];
      newFiles.splice(index, 1);
      form.setValue("gallery", newFiles);
    }
  };

  const removeAttachment = (index: number) => {
    const newAttachments = [...attachments];
    newAttachments.splice(index, 1);
    setAttachments(newAttachments);

    const currentFiles = form.getValues("attachments") || [];
    const newFiles = [...currentFiles];
    newFiles.splice(index, 1);
    form.setValue("attachments", newFiles);
  };

  return (
    <Card className="rounded-[3px]">
      <CardHeader>
        <CardTitle data-aos="zoom-out-left">Media</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="text-sm text-[#696969] mb-2 block">
            Featured Image
          </Label>
          <div className="grid grid-cols-4 max-[710px]:grid-cols-2 gap-4">
            {featuredImages.length > 0
              ? featuredImages.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square h-24 w-24 rounded-[3px] bg-gray-200 relative"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Featured ${index}`}
                      className="h-full w-full object-cover rounded-[3px]"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index, "featured")}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))
              : [1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="aspect-square  h-[150px] w-[150px] rounded-[3px] bg-gray-200"
                  />
                ))}
          </div>
          <input
            type="file"
            ref={featuredImageRef}
            onChange={handleFeaturedImageUpload}
            className="hidden"
            accept="image/*"
            multiple
          />
          <Button
            data-aos="fade-left"
            variant="outline"
            className="mt-4 text-blue-500 py-[21px] hover:bg-blue-500 active:scale-95 hover:text-[#fff] transition duration-300 rounded-[3px] px-[50px] border border-blue-500"
            onClick={() => featuredImageRef.current?.click()}
            type="button"
          >
            Upload
          </Button>
        </div>

        <div>
          <Label className="text-sm text-[#696969] mb-2 block">Gallery</Label>
          {galleryImages.length > 0 && (
            <div className="grid grid-cols-4 gap-4 mb-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square h-24 w-24 rounded-[3px] bg-gray-200 relative"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Gallery ${index}`}
                    className="h-full w-full object-cover rounded-[3px]"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index, "gallery")}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
          <input
            type="file"
            ref={galleryImageRef}
            onChange={handleGalleryUpload}
            className="hidden"
            accept="image/*"
            multiple
          />
          <Button
            data-aos="fade-left"
            variant="outline"
            className="mt-4 text-blue-500 py-[21px] hover:bg-blue-500 active:scale-95 hover:text-[#fff] transition duration-300 rounded-[3px] px-[50px] border border-blue-500"
            onClick={() => galleryImageRef.current?.click()}
            type="button"
          >
            Upload
          </Button>
        </div>

        <div>
          <Label className="text-sm text-[#696969] mb-2 block">
            Attachment
          </Label>
          {attachments.length > 0 && (
            <div className="mb-2 space-y-2">
              {attachments.map((attachment, index) => (
                <div key={index} className="flex items-center gap-2">
                  <File className="h-4 w-4" />
                  <span className="text-sm">{attachment}</span>
                  <button
                    type="button"
                    onClick={() => removeAttachment(index)}
                    className="text-red-500 ml-auto"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
          <input
            type="file"
            ref={attachmentRef}
            onChange={handleAttachmentUpload}
            className="hidden"
          />
          <Button
            data-aos="fade-left"
            variant="outline"
            className="mt-4 text-blue-500 py-[21px] hover:bg-blue-500 active:scale-95 hover:text-[#fff] transition duration-300 rounded-[3px] px-[50px] border border-blue-500"
            onClick={() => attachmentRef.current?.click()}
            type="button"
          >
            Uploadc
          </Button>
        </div>

        <div>
          <Input placeholder="Video link" {...form.register("videoLink")} />
        </div>

        <div>
          <Input placeholder="Virtual tour" {...form.register("virtualTour")} />
        </div>
      </CardContent>
    </Card>
  );
}

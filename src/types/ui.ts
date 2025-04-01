import { StaticImageData } from "next/image";

export interface Property {
  id: number;
  title: string;
  location: string;
  beds: number;
  baths: number;
  garage: number;
  size: string;
  price: string;
  oldPrice: string;
  img: StaticImageData;
  avatar: string;
}
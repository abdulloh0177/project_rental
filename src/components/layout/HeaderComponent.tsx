"use client"
import React from 'react'
import Image from 'next/image'
import Logo from "@/assets/images/logo.svg"
import { Button } from '../ui/button'
import PresonIcon from "@/assets/icons/personIcon.svg";
import MenuIcon from "@/assets/icons/menuIcon.svg";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import Link from 'next/link';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/proporties", label: "Proporties" },
  { href: "/favourites", label: "Favourites" },
];
const HeaderComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  return (
    <div className="container  flex items-center justify-between">
      <Drawer>
        <DrawerTrigger
          className="hidden cursor-pointer max-sm:inline-block"
          asChild
        >
          <SlMenu size={18} color="#fff" />
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto pt-[100px]  max-w-sm">
            <DrawerHeader>
              <div className="gap-[24px] text-[#0D263B] font-[500] text-[18px] text-center flex flex-col">
                <DrawerTitle className="hover:font-bold hover:scale-120 transition-all duration-300 cursor-pointer">
                  <a href={"/"}>Home</a>
                </DrawerTitle>
                <DrawerTitle className="hover:font-bold hover:scale-120 transition-all duration-300 cursor-pointer">
                  <a href={"/proporties"}>Proporties</a>
                </DrawerTitle>
                <DrawerTitle className="hover:font-bold hover:scale-120 transition-all duration-300 cursor-pointer">
                  <a href={"/favourites"}>Favourites</a>
                </DrawerTitle>
              </div>
            </DrawerHeader>
            <div className="flex items-center gap-[25px] pt-[130px] pb-[270px]">
              <Link href={"https://www.facebook.com/"}>
                <div className="hover:bg-[#E7E9EB]  transition rounded-md p-[12px]">
                  <FaFacebookF />
                </div>
              </Link>
              <Link href={"https://x.com/"}>
                <div className="hover:bg-[#E7E9EB] transition rounded-md p-[12px]">
                  <FaTwitter />
                </div>
              </Link>
              <Link href={"https://www.instagram.com/"}>
                <div className="hover:bg-[#E7E9EB]  transition rounded-md p-[12px]">
                  <FaInstagram />
                </div>
              </Link>
              <Link href={"https://www.linkedin.com/"}>
                <div className="hover:bg-[#E7E9EB]  transition rounded-md p-[12px]">
                  <FaLinkedinIn />
                </div>
              </Link>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      <div>
        <Image className="object-contain" src={Logo} alt="logo" />
      </div>

      <div className="text-[#fff] flex max-sm:hidden items-center gap-[40px]">
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`px-3 py-2 transition-all duration-300   cursor-pointer rounded-[3px]  ${
              pathname === href
                ? "bg-[#fff] text-[#000]" // Active style
                : "text-[#fff] hover:bg-gray-700 hover:text-white"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
      <div>
        <Button
          onClick={()=>router.push('/login')}
          className=" text-white rounded-[2px]  active:scale-90 max-sm:hidden border-white duration-300 hover:bg-white hover:text-black will-change:transform transition"
          variant="outline"
          size="lg"
        >
          Login
        </Button>
        <div className="hidden max-sm:inline-block">
          <IoPersonOutline size={18} color="#fff" />
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent
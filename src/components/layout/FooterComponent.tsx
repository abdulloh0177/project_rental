import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import Logo from "@/assets/images/logo.svg"
import Link from 'next/link';
import { IoIosArrowUp } from "react-icons/io";
import { Button } from '../ui/button';
const FooterComponent = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Contact Us */}
        <div>
          <h2 className="font-semibold text-lg mb-7">Contact Us</h2>
          <div className="flex items-start gap-[20px] text-sm">
            <SlLocationPin color='#fff' className="text-lg shrink-0" />
            <span>
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
            </span>
          </div>
          <div className="mt-5 flex items-center  gap-[20px] text-sm">
            <HiOutlinePhone color='#fff' className="text-lg shrink-0" />
            <span>123 456 7890</span>
          </div>
          <div className="mt-5 flex items-center gap-[20px] text-sm">
            <MdOutlineEmail color='#fff' className="text-lg shrink-0" />
            <span>support@houzing.com</span>
          </div>
          {/* Social Media */}
          <div className="flex space-x-4 mt-[40px] text-lg">
            <Link
              href="#"
              className="hover:text-gray-400 hover:bg-[#253C4F] transition rounded-md  p-[12px]"
            >
              <FaFacebookF color='#fff'/>
            </Link>
            <Link
              href="#"
              className="hover:text-gray-400 hover:bg-[#253C4F] transition rounded-md p-[12px]"
            >
              <FaTwitter color='#fff'/>
            </Link>
            <Link
              href="#"
              className="hover:text-gray-400 hover:bg-[#253C4F] transition rounded-md p-[12px]"
            >
              <FaInstagram color='#fff' />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-400 hover:bg-[#253C4F] transition rounded-md p-[12px]"
            >
              <FaLinkedinIn color='#fff' />
            </Link>
          </div>
        </div>

        {/* Discover */}
        <div>
          <h2 className="font-semibold text-lg mb-7">Discover</h2>
          <ul className="space-y-5 text-sm">
            <li>
              <a href="#" className="hover:text-gray-400">
                Chicago
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Los Angeles
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Miami
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                New York
              </a>
            </li>
          </ul>
        </div>

        {/* Lists by Category */}
        <div>
          <h2 className="font-semibold text-lg mb-7">Lists by Category</h2>
          <ul className="space-y-5 text-sm">
            <li>
              <a href="#" className="hover:text-gray-400">
                Apartments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Condos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Houses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Retail
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Villas
              </a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h2 className="font-semibold text-lg mb-7">Lists by Category</h2>
          <ul className="space-y-5 text-sm">
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* Bottom Section */}
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-[#FFFFFF]">
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="logo" />
        </div>
        <p className="text-sm max-md:mt-[24px]">
          Copyright © 2021 CreativeLayers. All Rights Reserved.
        </p>
      </div>
      {showButton && (
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed z-50 bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white py-[20px] px-[18px] rounded-[4px] shadow-md transition-all"
        >
          <IoIosArrowUp color='#fff' />
        </Button>
      )}
    </div>
  );
}

export default FooterComponent
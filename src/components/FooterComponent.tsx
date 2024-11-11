import { LogoWhite } from "@/assets";
import Image from "next/image";
import React from "react";

export default function FooterComponent() {
  return (
    <div className={`w-full text-white p-2 md:p-4 bg-[#703BE7]`}>
      <div className="flex flex-col md:flex-row justify-evenly gap-3 md:gap-1 py-8">
        <div className="md:hidden flex flex-col p-4">
          <Image
            src={LogoWhite}
            width={70}
            height={30}
            alt="Videfly"
            draggable={false}
            className="md:w-[90px] md:h-[40px]"
          />
          <p className="text-xs md:text-sm">
            Videfly adalah generator video produk AI yang mudah digunakan, hemat
            biaya, dan menghasilkan video yang memukau. Dengan Videfly, kamu
            bisa membuat video produk profesional dalam hitungan menit, tanpa
            perlu keahlian editing video.
          </p>
        </div>
        {/* Mobile view: options in flex-row */}
        <div className="grid grid-cols-2 gap-3 px-3 py-2 md:hidden">
          <div>
            <p className="text-sm">Product</p>
            <ul className="text-xs text-gray-300 ">
              <li className="py-1">
                <a href={"#"} className="hover:text-white">
                  Home
                </a>
              </li>
              <li className="py-1">
                <a href={"#"} className="hover:text-white">
                  Service
                </a>
              </li>
              <li className="py-1">
                <a href={"#"} className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li className="py-1">
                <a href={"#"} className="hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm">AI Tools</p>
            <ul className="text-xs text-gray-300">
              <li className="py-1">
                <a href={"#"} className="hover:text-white">
                  Remove Background
                </a>
              </li>
              <li className="py-1">
                <a href={"#"} className="hover:text-white">
                  Blur Backgrounds
                </a>
              </li>
              <li className="py-1">
                <a href={"#"} className="hover:text-white">
                  Image Resizer
                </a>
              </li>
              <li className="py-1">
                <a href={"#"} className="hover:text-white">
                  Scene Generation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm">User Terms</p>
            <ul className="text-xs text-gray-300">
              <li className="py-1">
                <a href={"#"} className="hover:text-white">
                  AI Ethics
                </a>
              </li>
              <li className="py-1">
                <a href={"#"} className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li className="py-1">
                <a href={"#"} className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex md:flex-col max-w-[40%]">
          <Image
            src={LogoWhite}
            width={70}
            height={30}
            alt="Videfly"
            draggable={false}
            className="md:w-[90px] md:h-[40px]"
          />
          <p className="text-sm">
            Videfly adalah generator video produk AI yang mudah digunakan, hemat
            biaya, dan menghasilkan video yang memukau. Dengan Videfly, kamu
            bisa membuat video produk profesional dalam hitungan menit, tanpa
            perlu keahlian editing video.
          </p>
        </div>
        <div className="hidden md:block">
          <p className="text-base">Product</p>
          <ul className="text-sm text-gray-300">
            <li className="py-1">
              <a href={"#"} className="hover:text-white">
                Home
              </a>
            </li>
            <li className="py-1">
              <a href={"#"} className="hover:text-white">
                Service
              </a>
            </li>
            <li className="py-1">
              <a href={"#"} className="hover:text-white">
                Pricing
              </a>
            </li>
            <li className="py-1">
              <a href={"#"} className="hover:text-white">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <p className="text-base">AI Tools</p>
          <ul className="text-sm text-gray-300">
            <li className="py-1">
              <a href={"#"} className="hover:text-white">
                Remove Background
              </a>
            </li>
            <li className="py-1">
              <a href={"#"} className="hover:text-white">
                Blur Backgrounds
              </a>
            </li>
            <li className="py-1">
              <a href={"#"} className="hover:text-white">
                Image Resizer
              </a>
            </li>
            <li className="py-1">
              <a href={"#"} className="hover:text-white">
                Scene Generation
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <p className="text-base">User Terms</p>
          <ul className="text-sm text-gray-300">
            <li className="py-1">
              <a href={"#"} className="hover:text-white">
                AI Ethics
              </a>
            </li>
            <li className="py-1">
              <a href={"#"} className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li className="py-1">
              <a href={"#"} className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile view: Videfly logo and copyright */}
      <div className="flex flex-col px-3 mt-2 md:hidden">
        <p className="text-xs text-gray-300">
          © Copyright 2024, Videfly. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

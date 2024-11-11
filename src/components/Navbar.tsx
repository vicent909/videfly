"use client";
import { DownChevron, VideflyLogo } from "@/assets";
import { NavbarBurger } from "@/assets/SVG";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="shadow-navbar flex items-center h-[65px] lg:h-[75px] flex-shrink-0 absolute w-full z-50 bg-white">
      <div className="flex justify-between items-center w-5/6 mx-auto">
        <Image
          alt="logo"
          src={VideflyLogo}
          className="w-[95px] h-[30px] lg:w-[135.85px] lg:h-[42.8px]"
        />
        <div className="hidden lg:flex gap-[60px]">
          <Dropdown>
            <DropdownTrigger>
              <div className="flex items-center gap-[6px] text-[16px] text-neutral-400 py-[8px] px-[14px] cursor-pointer">
                <p className="">Fitur AI</p>
                <Image alt="down-chevron" src={DownChevron} />
              </div>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>test</DropdownItem>
              <DropdownItem>test</DropdownItem>
              <DropdownItem>test</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Link href={"#"}>
            <p className="text-[16px] text-neutral-400 py-[8px] px-[14px] cursor-pointer">
              Solusi Bisnis
            </p>
          </Link>
          <Link href={"#"}>
            <p className="text-[16px] text-neutral-400 py-[8px] px-[14px] cursor-pointer">
              Harga
            </p>
          </Link>
          <Link href={"#"}>
            <p className="text-[16px] text-neutral-400 py-[8px] px-[14px] cursor-pointer">
              Support
            </p>
          </Link>
        </div>
        <div>
          <div className="flex gap-[15px]">
            <Link href={"#"}>
              <motion.div initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="bg-[#f5f5f5] w-fit h-fit border-[1px] px-[20px] py-[10px] rounded-[12px] cursor-pointer text-black ">
                Sign In
              </motion.div>
            </Link>
            <Link href={"#"} className="hidden lg:inline">
              <motion.div initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="bg-black text-white w-fit h-fit border-[2px] px-[20px] py-[10px] rounded-[12px] cursor-pointer ">
                Get Started
              </motion.div>
            </Link>
            <div className=" flex items-center lg:hidden">
              <NavbarBurger />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ReviewCard({
  text,
  picture,
  logo,
  name,
  title,
  isActive,
}: {
  text: string;
  picture: StaticImageData;
  logo: StaticImageData | null;
  name: string;
  title: string;
  isActive: boolean;
}) {
  return (
    <motion.div
      animate={{ scale: isActive ? 1 : 0.9 }}
      transition={{ duration: 0.5 }}
      className={`bg-white h-full rounded-xl w-full px-[18px] lg:px-[41px] pt-[15px] lg:pt-[34px] pb-[39px] lg:pb-[100px] flex flex-col justify-between flex-shrink-0 ${
        isActive ? "opacity-100 grayscale-0" : "grayscale opacity-50"
      }`}
    >
      <div>
        <p className="font-nunito font-bold text-[21px] lg:text-[48px] ">“</p>
        <p className="text-[11.25px] lg:text-[25px] pl-[25px]  ">{text}</p>
      </div>
      <div className="flex gap-[30px] items-center">
        <Image alt="picture" src={picture} className="hidden lg:inline"/>
        <Image alt="picture" src={picture} className="lg:hidden h-[85px] w-[78px]"/>
        <div className="flex flex-col gap-[13px] lg:gap-[30px]">
          <div>
            <p className="font-semibold text-[14px] lg:text-[32px]  ">{name}</p>
            <p className="font-light text-[10px] lg:text-[20px] ">{title}</p>
          </div>
          {logo !== null && <Image alt="logo" src={logo} className="hidden lg:inline"/>}
          {logo !== null && <Image alt="logo" src={logo} className="lg:hidden h-[50%] w-[50%]"/>}
        </div>
      </div>
    </motion.div>
  );
}

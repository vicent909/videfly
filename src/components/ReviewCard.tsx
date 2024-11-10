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
      className={`bg-white h-full rounded-xl w-full px-[41px] pt-[34px] pb-[100px] flex flex-col justify-between flex-shrink-0 ${
        isActive ? "opacity-100 grayscale-0" : "grayscale opacity-50"
      }`}
    >
      <div>
        <p className="font-nunito font-bold text-[48px] ">“</p>
        <p className="text-[25px] pl-[25px]  ">{text}</p>
      </div>
      <div className="flex gap-[30px] items-center">
        <Image alt="picture" src={picture} />
        <div className="flex flex-col gap-[30px]">
          <div>
            <p className="font-semibold text-[32px]  ">{name}</p>
            <p className="font-light text-[20px] ">{title}</p>
          </div>
          {logo !== null && <Image alt="logo" src={logo} />}
        </div>
      </div>
    </motion.div>
  );
}

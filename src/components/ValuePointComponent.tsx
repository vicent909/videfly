"use client";
import {
  Potrait1,
  Potrait2,
  Potrait3,
  Potrait4,
  Rec1,
  Rec2,
  Square1,
  Square2,
  Square3,
  Square4,
  Square5,
  Square6,
  ValuePoint1,
  ValuePoint2,
} from "@/assets";
import { Camera10, MultiFormat, Templates } from "@/assets/SVG";
import Image from "next/image";
import React from "react";
import SlidingTemplates from "./SlidingTemplates";
import { motion } from "framer-motion";

export default function ValuePointComponent() {
  return (
    <div className="flex flex-col w-5/6 mx-auto gap-[30px] h-fit">
      <motion.div
        initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "spring",
        }}
        className="flex gap-[30px] h-1/2"
      >
        <div className="flex-1 bg-white rounded-xl">
          <div className="bg-gradient-to-b from-[#FFD9D2] to-[#FFFFFF] rounded-xl">
            <Image alt="vp1" src={ValuePoint1} className="rounded-xl" />
          </div>
          <div className="flex p-[30px] flex-col gap-[17px]">
            <div className="flex items-center gap-[15px]">
              <MultiFormat width={30} height={30} color="#000000" />
              <p className="font-nunito font-bold text-[24px]">Multi Format</p>
            </div>
            <p className="text-[17px] ">
              Tingkatkan engagement dengan konten video yang relevan dan menarik
              di setiap platform, seperti Facebook, Instagram dan TikTok.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl">
          <div className="bg-gradient-to-b from-primary-violet-100 to-[#FFFFFF] rounded-xl">
            <Image alt="vp1" src={ValuePoint2} className="rounded-xl" />
          </div>
          <div className="flex p-[30px] flex-col gap-[17px]">
            <div className="flex items-center gap-[15px]">
              <Camera10 width={40} height={38} color="#000000" />
              <p className="font-nunito font-bold text-[24px]">Batch Mode</p>
            </div>
            <p className="text-[17px] ">
              Buat banyak variasi video iklan sekaligus hanya dari satu link
              produk. Optimalkan performa dan tingkatkan ROI dengan mudah!
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{
          x: "100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "spring",
        }}
        className="flex flex-col h-1/2 pt-[28px] bg-white rounded-xl w-full overflow-x-hidden"
      >
        <SlidingTemplates />
        <div className="flex p-[30px] flex-col gap-[17px]">
          <div className="flex items-center gap-[15px]">
            <Templates width={30} height={30} color="#000000" />
            <p className="font-nunito font-bold text-[24px]">
              100+ Brand Templates
            </p>
          </div>
          <p className="text-[17px] ">
            Tersedia ratusan template video trendy yang siap pakai untuk menjaga
            konsistensi merek. Buat video berkualitas jadi lebih mudah dan
            cepat!
          </p>
        </div>
      </motion.div>
    </div>
  );
}

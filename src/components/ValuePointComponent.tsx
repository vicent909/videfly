"use client";
import {
  ValuePoint1,
  ValuePoint2,
} from "@/assets";
import { Camera10, MultiFormat, Templates } from "@/assets/SVG";
import Image from "next/image";
import React, { useRef } from "react";
import SlidingTemplates from "./SlidingTemplates";
import { motion, useInView } from "framer-motion";

export default function ValuePointComponent() {
  const ref1 = useRef(null)
  const isInView1 = useInView(ref1, { once: true, amount: 0.5 })
  return (
    <div className="flex flex-col w-11/12 lg:w-5/6 mx-auto gap-[30px] h-fit py-[29px] lg:py-[50px] overflow-hidden relative">
      <motion.div
        initial={{
          x: "-100%",
          opacity: 0,
        }}
        animate={ isInView1 ? {
          x: 0,
          opacity: 1,
        } : {}}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "spring",
        }}
        className="flex flex-col lg:flex-row gap-[30px] h-1/2"
      >
        <div className="flex-1 bg-white rounded-xl">
          <div className="bg-gradient-to-b from-[#FFD9D2] to-[#FFFFFF] rounded-xl">
            <Image alt="vp1" src={ValuePoint1} className="rounded-xl" />
          </div>
          <div className="flex p-[14px] lg:p-[30px] flex-col gap-[5px] lg:gap-[17px] ">
            <div className="hidden lg:flex items-center gap-[15px]">
              <MultiFormat width={30} height={30} color="#000000" />
              <p className="font-nunito font-bold text-[24px]">Multi Format</p>
            </div>
            <div className="flex lg:hidden items-center gap-[2.5px]">
              <MultiFormat width={14} height={14} color="#000000" />
              <p className="font-nunito font-bold text-[14px]">Multi Format</p>
            </div>
            <p className="text-[10px] lg:text-[17px] ">
              Tingkatkan engagement dengan konten video yang relevan dan menarik
              di setiap platform, seperti Facebook, Instagram dan TikTok.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl">
          <div className="bg-gradient-to-b from-primary-violet-100 to-[#FFFFFF] rounded-xl">
            <Image alt="vp1" src={ValuePoint2} className="rounded-xl" />
          </div>
          <div className="flex p-[14px] lg:p-[30px] flex-col gap-[5px] lg:gap-[17px]">
            <div className="hidden lg:flex items-center gap-[15px]">
              <Camera10 width={40} height={38} color="#000000" />
              <p className="font-nunito font-bold text-[24px]">Batch Mode</p>
            </div>
            <div className="flex lg:hidden items-center gap-[2.5px]">
              <Camera10 width={23} height={14} color="#000000" />
              <p className="font-nunito font-bold text-[14px]">Batch Mode</p>
            </div>
            <p className="text-[10px] lg:text-[17px]">
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
        animate={ isInView1 ? {
          x: 0,
          opacity: 1,
        } : {}}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "spring",
        }}
        className="flex flex-col h-1/2 pt-[9px] lg:pt-[28px] bg-white rounded-xl w-full overflow-x-hidden"
      >
        <SlidingTemplates />
        <div className="flex p-[14px] lg:p-[30px] flex-col gap-[5px] lg:gap-[17px]">
          <div className="hidden lg:flex items-center gap-[15px]">
            <Templates width={30} height={30} color="#000000" />
            <p className="font-nunito font-bold text-[24px]">
              100+ Brand Templates
            </p>
          </div>
          <div className="flex lg:hidden items-center gap-[2.5px]">
            <Templates width={14} height={14} color="#000000" />
            <p className="font-nunito font-bold text-[14px]">
              100+ Brand Templates
            </p>
          </div>
          <p className="text-[10px] lg:text-[17px] ">
            Tersedia ratusan template video trendy yang siap pakai untuk menjaga
            konsistensi merek. Buat video berkualitas jadi lebih mudah dan
            cepat!
          </p>
        </div>
      </motion.div>
      <div className="absolute bottom-[80%] lg:bottom-0 h-1/2" ref={ref1}></div>
    </div>
  );
}

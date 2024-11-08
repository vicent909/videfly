import React from "react";
import { motion } from "framer-motion";
import { AIMagic, Double, ForwardIcon } from "@/assets/SVG";

export default function StepComponent2({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{
        y: -80,
        x: 1000,
        opacity: 1
      }}
      animate={
        isInView
          ? {
              x: 450,
              opacity: 0
            }
          : {}
      }
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 0.5,
        type: "spring",
        opacity: {delay: 3}
      }}
      className="absolute bg-white z-30 bottom-0 p-[24px] rounded-xl shadow-navbar "
    >
      <div className="flex justify-between gap-[24px]">
        <div className="relative">
          <div className="relative">
            <video
              src="./video7.mp4"
              className="h-[173px] rounded-lg relative"
            />
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col gap-[3px] h-full">
            <p className="font-semibold text-[9px] text-neutral-300">Caption</p>
            <div className="max-w-[256px] bg-[#F5F5F5] p-[10px] rounded-md h-full flex flex-col justify-between ">
              <p className="text-[#111336] text-[8px] ">
                Kulit bersih tanpa rasa kering! ✨ Zero Cleansing Balm
                membersihkan kotoran, minyak, dan makeup dengan lembut.
                <br />
                <br />
                Diformulasikan dari bahan alami seperti minyak kelapa, biji
                anggur, dan jojoba untuk menjaga kelembapan kulit.
                #ZeroCleansingBalm #KulitSehat
              </p>
              <div className="flex items-start justify-between">
                <div className="flex gap-[5px]">
                  <Double width={10} height={10} />
                  <ForwardIcon width={10} height={10} color="#8a8a8a" />
                </div>
                <div className="flex gap-[2px] items-center gradientBorder2 py-[1px] px-[6px]">
                  <p className="text-[9px] bg-gradient-to-r from-[#33B0EA] to-[#703BE7] bg-clip-text text-transparent ">
                    Ask AI
                  </p>
                  <AIMagic />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

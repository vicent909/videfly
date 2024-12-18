import React from "react";
import { motion } from "framer-motion";
import { AIMagic, Double, ForwardIcon } from "@/assets/SVG";

export default function StepComponent2Mobile({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{
        x: 2000,
        opacity: 1
      }}
      animate={
        isInView
          ? {
              x: 0,
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
      className="absolute bg-white z-30 p-[6px] rounded-sm shadow-navbar lg:hidden right-[10%] bottom-[3%]"
    >
      <div className="flex justify-between gap-[6px]">
        <div className="relative">
          <div className="relative">
            <video
              src="./video7.mp4"
              className="h-[45px] rounded-sm relative"
            />
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col gap-[1px] h-full">
            <p className="font-semibold text-[2.5px] text-neutral-300">Caption</p>
            <div className="max-w-[65px] bg-[#F5F5F5] p-[2px] rounded-sm h-full flex flex-col justify-between ">
              <p className="text-[#111336] text-[2px] ">
                Kulit bersih tanpa rasa kering! ✨ Zero Cleansing Balm
                membersihkan kotoran, minyak, dan makeup dengan lembut.
                <br />
                <br />
                Diformulasikan dari bahan alami seperti minyak kelapa, biji
                anggur, dan jojoba untuk menjaga kelembapan kulit.
                #ZeroCleansingBalm #KulitSehat
              </p>
              <div className="flex items-start justify-between">
                <div className="flex gap-[1px]">
                  <Double width={4} height={4} />
                  <ForwardIcon width={4} height={4} color="#8a8a8a" />
                </div>
                {/* <div className="flex gap-[2px] items-center gradientBorder2 py-[1px] px-[6px]">
                  <p className="text-[9px] bg-gradient-to-r from-[#33B0EA] to-[#703BE7] bg-clip-text text-transparent ">
                    Ask AI
                  </p>
                  <AIMagic />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { AIMagic, Checklist, ForwardIcon, Scissor } from "@/assets/SVG";

export default function StepComponent1({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{
        y: -150,
        x: -2000,
        opacity: 1
      }}
      animate={
        isInView
          ? {
              x: -510,
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
      className="absolute bg-white z-30 bottom-0 py-[10px] px-[15px] rounded-xl shadow-navbar hidden lg:inline"
    >
      <div>
        <p className="font-semibold text-[12px]  ">
          4 Video siap untuk Anda. Pilih untuk edit <br />
          atau ekspor.
        </p>
        <div className="flex items-center gap-[6px] pt-[5px]">
          <Checklist color="#8A8A8A" width={9} height={10} />
          <p className="text-[8px] text-[#8a8a8a]">
            Semua video siap dipakai untuk kebutuhan komersial.
          </p>
        </div>
      </div>
      <div className="flex pt-[15px] justify-between">
        <div className="relative">
          <div className="relative">
            <video
              src="./video7.mp4"
              className="h-[192px] rounded-lg relative"
            />
            <div className="flex justify-between items-start absolute w-full top-0 pt-[4px] pl-[4px] pr-[4px] ">
              <div className="bg-black bg-opacity-[20%] h-fit w-fit p-[4px] rounded-md ">
                <ForwardIcon width={8} height={8} color="#ffffff" />
              </div>
              <div className="bg-black bg-opacity-[20%] h-fit w-fit px-[3px] py-[0px] rounded-full ">
                <p className="text-white text-[6px]  ">00 : 28</p>
              </div>
            </div>
            <div className="flex justify-end items-center absolute w-full bottom-0 pb-[8px] pl-[4px] pr-[4px] gap-[6px]">
              <div className="bg-black bg-opacity-[20%] h-fit w-fit p-[4px] rounded-md ">
                <Scissor width={8} height={8} color="#ffffff" />
              </div>
              <div className="bg-primary-violet-500 h-fit w-fit px-[11px] py-[4px] rounded-md ">
                <p className="text-white font-semibold text-[7px]  ">Render</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-[5px]">
            <p className="text-neutral-300 font-semibold text-[6px]">
              Generate caption
            </p>
            <div className="flex gap-[2px] items-center gradientBorder2 py-[1px] px-[6px]">
              <p className="text-[6px] bg-gradient-to-r from-[#33B0EA] to-[#703BE7] bg-clip-text text-transparent ">
                Ask AI
              </p>
              <AIMagic />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative">
            <video
              src="./video8.mp4"
              className="h-[192px] rounded-lg relative"
            />
            <div className="flex justify-between items-start absolute w-full top-0 pt-[4px] pl-[4px] pr-[4px] ">
              <div className="bg-black bg-opacity-[20%] h-fit w-fit p-[4px] rounded-md ">
                <ForwardIcon width={8} height={8} color="#ffffff" />
              </div>
              <div className="bg-black bg-opacity-[20%] h-fit w-fit px-[3px] py-[0px] rounded-full ">
                <p className="text-white text-[6px]  ">00 : 28</p>
              </div>
            </div>
            <div className="flex justify-end items-center absolute w-full bottom-0 pb-[8px] pl-[4px] pr-[4px] gap-[6px]">
              <div className="bg-black bg-opacity-[20%] h-fit w-fit p-[4px] rounded-md ">
                <Scissor width={8} height={8} color="#ffffff" />
              </div>
              <div className="bg-primary-violet-500 h-fit w-fit px-[11px] py-[4px] rounded-md ">
                <p className="text-white font-semibold text-[7px]  ">Render</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-[5px]">
            <p className="text-neutral-300 font-semibold text-[6px]">
              Generate caption
            </p>
            <div className="flex gap-[2px] items-center gradientBorder2 py-[1px] px-[6px]">
              <p className="text-[6px] bg-gradient-to-r from-[#33B0EA] to-[#703BE7] bg-clip-text text-transparent ">
                Ask AI
              </p>
              <AIMagic />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

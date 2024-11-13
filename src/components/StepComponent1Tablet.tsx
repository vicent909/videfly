import React from "react";
import { motion } from "framer-motion";
import {
  AIMagicMobile,
  Checklist,
  ForwardIcon,
  Scissor,
} from "@/assets/SVG";

export default function StepComponent1Tablet({
  isInView,
}: {
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{
        x: -2000,
        opacity: 1,
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
        opacity: { delay: 3 },
      }}
      className="absolute bg-white z-30 bottom-[3%] left-[5%] py-[6.5px] px-[9.5px] rounded-sm shadow-navbar hidden md:inline lg:hidden"
    >
      <div>
        <p className="font-semibold text-[8px]  ">
          4 Video siap untuk Anda. Pilih untuk edit <br />
          atau ekspor.
        </p>
        <div className="flex items-center gap-[6px] pt-[5px]">
          <Checklist color="#8A8A8A" width={7} height={7} />
          <p className="text-[5px] text-[#8a8a8a]">
            Semua video siap dipakai untuk kebutuhan komersial.
          </p>
        </div>
      </div>
      <div className="flex pt-[15px] justify-between">
        <div className="relative">
          <div className="relative">
            <video
              src="./video7.mp4"
              className="h-[115px] rounded-md relative"
            />
            <div className="flex justify-between items-start absolute w-full top-0 pt-[2px] pl-[3px] pr-[3px] ">
              <div className="bg-black bg-opacity-[20%] h-fit w-fit p-[3px] rounded-md ">
                <ForwardIcon width={5} height={5} color="#ffffff" />
              </div>
              <div className="bg-black bg-opacity-[20%] h-fit w-fit px-[4px] py-[0px] rounded-full ">
                <p className="text-white text-[4px]  ">00 : 28</p>
              </div>
            </div>
            <div className="flex justify-end items-center absolute w-full bottom-0 pb-[2px] pl-14px] pr-[1px] gap-[4px]">
              <div className="bg-black bg-opacity-[20%] h-fit w-fit p-[3px] rounded-md ">
                <Scissor width={5} height={5} color="#ffffff" />
              </div>
              <div className="bg-primary-violet-500 h-fit w-fit px-[7px] py-[2px] rounded-sm ">
                <p className="text-white font-semibold text-[4px]  ">
                  Render
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-[2px]">
            <p className="text-neutral-300 font-semibold text-[4px]">
              Generate caption
            </p>
            <div className="flex gap-[2px] items-center gradientBorder2 py-[1px] px-[1px]">
              <p className="text-[4px] bg-gradient-to-r from-[#33B0EA] to-[#703BE7] bg-clip-text text-transparent ">
                Ask AI
              </p>
              <AIMagicMobile />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative">
            <video
              src="./video8.mp4"
              className="h-[115px] rounded-md relative"
            />
            <div className="flex justify-between items-start absolute w-full top-0 pt-[2px] pl-[3px] pr-[3px] ">
              <div className="bg-black bg-opacity-[20%] h-fit w-fit p-[3px] rounded-md ">
                <ForwardIcon width={5} height={5} color="#ffffff" />
              </div>
              <div className="bg-black bg-opacity-[20%] h-fit w-fit px-[4px] py-[0px] rounded-full ">
                <p className="text-white text-[4px]  ">00 : 28</p>
              </div>
            </div>
            <div className="flex justify-end items-center absolute w-full bottom-0 pb-[2px] pl-14px] pr-[1px] gap-[4px]">
              <div className="bg-black bg-opacity-[20%] h-fit w-fit p-[3px] rounded-md ">
                <Scissor width={5} height={5} color="#ffffff" />
              </div>
              <div className="bg-primary-violet-500 h-fit w-fit px-[7px] py-[2px] rounded-sm ">
                <p className="text-white font-semibold text-[4px]  ">
                  Render
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-[2px]">
            <p className="text-neutral-300 font-semibold text-[4px]">
              Generate caption
            </p>
            <div className="flex gap-[2px] items-center gradientBorder2 py-[1px] px-[1px]">
              <p className="text-[4px] bg-gradient-to-r from-[#33B0EA] to-[#703BE7] bg-clip-text text-transparent ">
                Ask AI
              </p>
              <AIMagicMobile />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
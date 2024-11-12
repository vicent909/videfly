"use client";
import Image from "next/image";
import React, { useEffect } from "react";
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
} from "@/assets";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";

export default function SlidingTemplates() {
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width - (15 * 15);

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 60,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);
  return (
    <motion.div
      className="flex gap-[6px] lg:gap-[15px]"
      ref={ref}
      style={{ x: xTranslation }}
    >
      <div className="flex gap-[6px] lg:gap-[15px]">
        <div className="h-[112px] lg:h-[372px] w-[63px] lg:w-[209px] rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Potrait4} />
        </div>
      </div>
      <div className="flex flex-col gap-[6px] lg:gap-[15px]">
        <div className="h-[53px] lg:h-[178px] aspect-square rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Square1} />
        </div>
        <div className="h-[53px] lg:h-[178px] aspect-square rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Square2} />
        </div>
      </div>
      <div className="flex flex-col gap-[6px] lg:gap-[15px]">
        <div className="h-[53px] lg:h-[178px] w-[95px] lg:w-[316px] rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Rec1} className="-mt-[30%]" />
        </div>
        <div className="h-[53px] lg:h-[178px] w-[95px] lg:w-[316px] rounded-xl overflow-hidden bg-cover bg-center">
          <Image unoptimized alt="image" src={Rec2} className="-mt-[10%]" />
        </div>
      </div>
      <div className="flex gap-[6px] lg:gap-[15px]">
        <div className="h-[112px] lg:h-[372px] w-[63px] lg:w-[209px] rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Potrait1} />
        </div>
        <div className="h-[112px] lg:h-[372px] w-[63px] lg:w-[209px] rounded-xl overflow-hidden bg-cover bg-center">
          <Image unoptimized alt="image" src={Potrait2} />
        </div>
      </div>
      <div className="flex flex-col gap-[6px] lg:gap-[15px]">
        <div className="h-[53px] lg:h-[178px] aspect-square rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Square3} />
        </div>
        <div className="h-[53px] lg:h-[178px] aspect-square rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Square4} />
        </div>
      </div>
      <div className="flex flex-col gap-[6px] lg:gap-[15px]">
        <div className="h-[53px] lg:h-[178px] aspect-square rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Square5} />
        </div>
        <div className="h-[53px] lg:h-[178px] aspect-square rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Square6} />
        </div>
      </div>
      <div className="flex gap-[6px] lg:gap-[15px]">
        <div className="h-[112px] lg:h-[372px] w-[63px] lg:w-[209px] rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Potrait3} />
        </div>
      </div>
      <div className="flex gap-[6px] lg:gap-[15px]">
        <div className="h-[112px] lg:h-[372px] w-[63px] lg:w-[209px] rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Potrait4} />
        </div>
      </div>
      <div className="flex flex-col gap-[6px] lg:gap-[15px]">
        <div className="h-[53px] lg:h-[178px] aspect-square rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Square1} />
        </div>
        <div className="h-[53px] lg:h-[178px] aspect-square rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Square2} />
        </div>
      </div>
      <div className="flex flex-col gap-[6px] lg:gap-[15px]">
        <div className="h-[53px] lg:h-[178px] w-[95px] lg:w-[316px] rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Rec1} className="-mt-[30%]" />
        </div>
        <div className="h-[53px] lg:h-[178px] w-[95px] lg:w-[316px] rounded-xl overflow-hidden bg-cover bg-center">
          <Image unoptimized alt="image" src={Rec2} className="-mt-[10%]" />
        </div>
      </div>
      <div className="flex gap-[6px] lg:gap-[15px]">
        <div className="h-[112px] lg:h-[372px] w-[63px] lg:w-[209px] rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Potrait1} />
        </div>
        <div className="h-[112px] lg:h-[372px] w-[63px] lg:w-[209px] rounded-xl overflow-hidden bg-cover bg-center">
          <Image unoptimized alt="image" src={Potrait2} />
        </div>
      </div>
      <div className="flex flex-col gap-[6px] lg:gap-[15px]">
        <div className="h-[53px] lg:h-[178px] aspect-square rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Square3} />
        </div>
        <div className="h-[53px] lg:h-[178px] aspect-square rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Square4} />
        </div>
      </div>
      <div className="flex flex-col gap-[6px] lg:gap-[15px]">
        <div className="h-[53px] lg:h-[178px] aspect-square rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Square5} />
        </div>
        <div className="h-[53px] lg:h-[178px] aspect-square rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Square6} />
        </div>
      </div>
      <div className="flex gap-[6px] lg:gap-[15px]">
        <div className="h-[112px] lg:h-[372px] w-[63px] lg:w-[209px] rounded-xl overflow-hidden ">
          <Image unoptimized alt="image" src={Potrait3} />
        </div>
      </div>
    </motion.div>
  );
}

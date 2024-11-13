import { Checklist2 } from "@/assets/SVG";
import React from "react";

export default function PricingList({content, color1, color2}: {content: string, color1: string, color2: string}) {
  return (
    <div className="flex gap-[16px] items-center ">
      <div className={`h-[26px] aspect-square rounded-full bg-white bg-opacity-50 flex items-center justify-center`}>
        <div className={`h-[24px] aspect-square rounded-full ${color2} flex items-center justify-center`}>
          <div className={`h-[14px] aspect-square rounded-full ${color2}  bg-opacity-80 flex items-center justify-center`}>
            <Checklist2 color={'white'} />
          </div>
        </div>
      </div>
      <p className={`text-${color1} text-[12px] lg:text-[14px]  `}>{content}</p>
    </div>
  );
}

import { Checklist2, ChecklistLainnya } from "@/assets/SVG";
import React, { useEffect } from "react";

export default function PricingListDark({content, color1, color2}: {content: string, color1: string, color2: string}) {
  return (
    <div className="flex gap-[16px] items-center ">
      <div className={`h-[26px] aspect-square rounded-full bg-[${color1}] bg-opacity-50 flex items-center justify-center`}>
        <div className={`h-[24px] aspect-square rounded-full bg-neutral-200 bg-opacity-15 flex items-center justify-center`}>
          <div className={`h-fit p-0 m-0 aspect-square rounded-full bg-neutral-100  bg-opacity-80 flex items-center justify-center`}>
            <ChecklistLainnya />
          </div>
        </div>
      </div>
      <p className={`text-${color1} text-[12px] lg:text-[14px]  `}>{content}</p>
    </div>
  );
}

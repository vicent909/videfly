import React, { useEffect } from "react";
import {
  Blili,
  Tokopedia,
  Shopee,
  Haul,
  Sociola,
  Tiktok,
  Lazada,
} from "@/assets";
import Image from "next/image";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";

export default function MovingMarketplace() {
  const marketplace = [Blili, Tokopedia, Shopee, Haul, Sociola, Tiktok, Lazada];
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width - 80;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div>
      <motion.div className="absolute bottom-5 lg:bottom-10 w-fit flex items-center lg:gap-[80px] gap-[40px]" style={{x: xTranslation}}>
        {[...marketplace, ...marketplace, ...marketplace].map((e, i) => {
          return <Image alt="image" src={e} key={i} className="h-[22px] lg:h-[54px]" />;
        })}
      </motion.div>
      <div className="absolute bottom-5 lg:bottom-10 w-fit flex items-center lg:gap-[80px] gap-[40px] opacity-0" ref={ref}>
        {marketplace.map((e, i) => {
          return <Image alt="image" src={e} key={i} className="h-[22px] lg:h-[54px]" />;
        })}
      </div>
    </div>
  );
}

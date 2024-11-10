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
      <motion.div className="absolute bottom-11 w-fit flex items-center gap-[80px]" style={{x: xTranslation}}>
        {[...marketplace, ...marketplace, ...marketplace].map((e, i) => {
          return <Image alt="image" src={e} key={i} />;
        })}
      </motion.div>
      <div className="absolute bottom-11 w-fit flex items-center gap-[80px] opacity-0" ref={ref}>
        {marketplace.map((e, i) => {
          return <Image alt="image" src={e} key={i} />;
        })}
      </div>
    </div>
  );
}

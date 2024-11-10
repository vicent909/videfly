'use client'
import React from "react";
import LinkProduk from "./LinkProduk";
import Image from "next/image";
import { Mockup } from "@/assets";
import { Arrow } from "@/assets/SVG";
import { motion } from "framer-motion";

export default function CallCenterComponent() {
  return (
    <motion.div 
        initial={{
            scale: 0.2
        }}
        whileInView={{
            scale: 1
        }}
        viewport={{
            amount: 0.5,
            once: true
        }}
        transition={{
            type: 'spring',
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.2
        }}
    className="w-5/6 mx-auto py-[95px] ">
      <div className="bg-gradient-to-br from-[#7f52ff] to-[#FB8570] px-[68px] py-[70px] rounded-[100px] flex items-center">
        <div className="w-1/2">
          <p className="font-nunito text-white text-[64px] font-bold ">
            Punya Pertanyaan? <br />
            Kami Siap Membantu
          </p>
          <LinkProduk title="Selama 24 jam" />
          <p className="font-light text-[20px] text-white mt-[15px]">
            Hubungi kami kapan saja, tim kami selalu siap sedia untuk membantu
            Anda dengan cepat dan ramah.
          </p>
          <motion.div 
            className="bg-white rounded-xl w-fit py-[10px] px-[24px] flex gap-[11.5px] mt-[30px] cursor-pointer"
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
                scale: 0.9
            }}
            initial= {{
                scale: 1
            }}
          >
            <p className="font-light text-[20px] bg-gradient-to-br from-[#7f52ff] to-[#FB8570] bg-clip-text text-transparent ">
              Coba Gratis
            </p>
            <div className="bg-gradient-to-br from-[#7f52ff] to-[#FB8570] w-fit h-fit rounded-full p-[4px]">
              <Arrow color="white" width={21} height={21} />
            </div>
          </motion.div>
        </div>
        <div className="w-1/2">
          <Image alt="img" src={Mockup} />
        </div>
      </div>
    </motion.div>
  );
}

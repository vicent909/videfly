"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Diamond } from "@/assets/SVG";
import { Slider, SliderValue, Switch } from "@nextui-org/react";
import PricingList from "./PricingList";
import PricingListDark from "./PricingListDark";

export default function PricingComponent() {
  const [selected, setSelected] = useState(false);
  const [slilderValue, setSliderValue] = useState<SliderValue>(0);
  const price = ["129.000", "299.000", "529.000"];
  return (
    <div className="h-fit flex items-center justify-center w-11/12 mx-auto py-[40px] lg:py-[60px]">
      <div className="flex flex-col gap-[25px] lg:gap-[50px] h-full w-full">
        <motion.div
          className=" flex flex-col items-center"
        >
          <div className="flex items-center border-[1px] px-[11px] py-[2px] gap-[7px] rounded-full border-primary-violet-500 cursor-pointer ">
            <Diamond color="#703be7" width={13} height={13} />
            <p className="text-primary-violet-500 text-[12px] lg:text-[16px]">PRICING</p>
          </div>
          <p className="font-nunito font-extrabold text-center text-[30px] lg:text-[48px] mt-[10px]">
            Bikin Video Produk Tanpa Bikin Dompet Tipis!
          </p>
          <p className="text-[12px] lg:text-[18px] text-center text-neutral-400 mt-[15px] lg:mt-[20px] ">
            Pilih paket berlangganan Videfly sesuai dengan skala bisnis dan
            budget maraketing Anda
          </p>
        </motion.div>
        <div className="flex-1 flex flex-col items-center w-full gap-[35px] h-full">
          <div className="flex gap-[18px] lg:gap-[30px] w-full justify-center items-center">
            <Switch
              isSelected={selected}
              onClick={() => setSelected(!selected)}
              classNames={{
                wrapper: "group-data-[selected=true]:bg-primary-violet-500",
              }}
            />
            <p className={`text-neutral-200 font-semibold text-[12px] lg:text-[24px] ${selected ? 'text-neutral-400' : 'text-neutral-200'} `}>
              Berlangganan Tahunan Hemat 20%
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[35px] h-full w-full justify-center">
            {/* free */}
            <motion.div
              initial={{
                opacity: 1,
              }}
              animate={
                selected
                  ? {
                      opacity: 0,
                    }
                  : {}
              }
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className={`${
                selected ? "hidden" : ""
              } bg-neutral-100 w-full lg:w-1/3 rounded-xl p-[8px]`}
            >
              <div className="bg-neutral-100 border-[1px] border-neutral-400 w-full h-full rounded-xl p-[10px] lg:p-[25px]">
                <p className="font-nunito font-bold text-[14px] lg:text-[24px] text-black ">
                  Gratis!
                </p>
                <p className="font-nunito font-semibold text-[20px] lg:text-[45px] text-black ">
                  Rp. 0{" "}
                  <span className="text-[16px] text-neutral-400 ">/bulan</span>
                </p>
                <div className=" flex flex-col gap-1 mt-[17px] lg:mt-[24px]">
                  <p className="text-neutral-400 text-[12px] lg:text-[14px]">
                    Bikin video konten promosi produk tanpa perlu jago ngedit!
                    Cukup dengan copy-paste link!
                  </p>
                </div>
                <div className="mt-[17px] lg:mt-[24px] w-full bg-neutral-400 flex items-center justify-center py-[10px] rounded-xl cursor-pointer hover:bg-gradient-to-br from-[#7f52ff] to-[#FB8570] text-white">
                  <p className="text-[12px] lg:text-[20px]">Coba Gratis</p>
                </div>
                <div className="w-full my-[28px] lg:my-[40px] flex items-center gap-[15px]">
                  <div className=" bg-gradient-to-r from-neutral-100 h-[2px] to-neutral-400 w-full flex items-center justify-end">
                    <div className="h-[10px] aspect-square bg-neutral-200 bg-opacity-50 rounded-full -mr-1 flex items-center justify-center">
                      <div className="h-[5px] aspect-square bg-neutral-100 rounded-full "></div>
                    </div>
                  </div>
                  <div className="border-1 w-fit px-[10px] rounded-full border-neutral-400 bg-white flex-shrink-0  ">
                    <p className="text-[10px] lg:text-[14px] text-neutral-400">
                      WHAT YOU WILL GET
                    </p>
                  </div>
                  <div className=" bg-gradient-to-r from-neutral-400 to-neutral-100 h-[2px] w-full flex items-center justify-start">
                    <div className="h-[10px] aspect-square bg-neutral-200 bg-opacity-50 rounded-full -ml-1 flex items-center justify-center">
                      <div className="h-[5px] aspect-square bg-neutral-100 rounded-full "></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] lg:gap-[15px]">
                  <PricingListDark
                    color1="#545454"
                    content="5 credits/month (~5 video)"
                  />
                  <PricingListDark
                    color1="#545454"
                    content="Up to 3 video scenes"
                  />
                  <PricingListDark
                    color1="#545454"
                    content="100+ templates"
                  />
                  <PricingListDark
                    color1="#545454"
                    content="9:16 aspect ratio only"
                  />
                  <PricingListDark
                    color1="#545454"
                    content="Exports with watermark"
                  />
                </div>
              </div>
            </motion.div>
            {/* PRO */}
            <div className="bg-primary-violet-500 w-full lg:w-1/3 rounded-xl p-[8px]">
              <div className="bg-primary-violet-500 border-[1px] w-full h-full rounded-xl p-[10px] lg:p-[25px]">
                <p className="font-nunito font-bold text-[14px] lg:text-[24px] text-white ">
                  Pro
                </p>
                <p className="font-nunito font-semibold text-[20px] lg:text-[45px] text-white ">
                  Rp. {price[+slilderValue]}{" "}
                  <span className="text-[16px] text-white ">/month</span>
                </p>
                <div className=" flex flex-col gap-1 mt-[17px] lg:mt-[24px]">
                  <Slider
                    aria-label="slider"
                    size="md"
                    step={1}
                    showSteps={true}
                    maxValue={2}
                    minValue={0}
                    defaultValue={0}
                    className="w-full !my-0"
                    classNames={{
                      step: "bg-primary-violet-500",
                      base: "bg-white rounded-full ",
                      track: " m-[2px] bg-white !border-l-primary-violet-500",
                      filler: "bg-primary-violet-500",
                    }}
                    onChange={(value: SliderValue) => {
                      setSliderValue(value);
                      console.log(slilderValue);
                    }}
                    renderThumb={(props) => (
                      <div
                        {...props}
                        className="group p-1 top-1/2 bg-white border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                      >
                        <span className="transition-transform bg-primary-violet-500 shadow-small from-secondary-100 to-secondary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
                      </div>
                    )}
                  />
                  <div className="text-white font-semibold text-[14px] flex justify-between">
                    <p>20</p>
                    <p>50</p>
                    <p>100</p>
                  </div>
                </div>
                <div className="mt-[17px] lg:mt-[24px] w-full bg-white flex items-center justify-center py-[10px] rounded-xl cursor-pointer hover:bg-gradient-to-br from-[#7f52ff] to-[#FB8570] hover:text-white ">
                  <p className="text-[12px] lg:text-[20px] ">Mulai Bikin Video</p>
                </div>
                <div className="w-full my-[28px] lg:my-[40px] flex items-center gap-[15px]">
                  <div className="bg-white bg-gradient-to-r from-primary-violet-500 h-[2px] to-white w-full flex items-center justify-end">
                    <div className="h-[10px] aspect-square bg-white bg-opacity-50 rounded-full -mr-1 flex items-center justify-center">
                      <div className="h-[5px] aspect-square bg-white rounded-full "></div>
                    </div>
                  </div>
                  <div className="border-1 w-fit px-[10px] rounded-full border-white flex-shrink-0  ">
                    <p className="text-[10px] lg:text-[14px] text-white">
                      EVERYTHING IN FREE, PLUS:
                    </p>
                  </div>
                  <div className="bg-white bg-gradient-to-r from-white to-primary-violet-500 h-[2px] w-full flex items-center justify-start">
                    <div className="h-[10px] aspect-square bg-white bg-opacity-50 rounded-full -ml-1 flex items-center justify-center">
                      <div className="h-[5px] aspect-square bg-white rounded-full "></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] lg:gap-[15px]">
                  <PricingList
                    color1="white"
                    color2="bg-primary-violet-500"
                    content="20 Credit/month (~20videos)"
                  />
                  <PricingList
                    color1="white"
                    color2="bg-primary-violet-500"
                    content="Up to 5 video scenes"
                  />
                  <PricingList
                    color1="white"
                    color2="bg-primary-violet-500"
                    content="Premium stock footage"
                  />
                  <PricingList
                    color1="white"
                    color2="bg-primary-violet-500"
                    content="9:16, 16:9 and 1:1 aspect ratio"
                  />
                  <PricingList
                    color1="white"
                    color2="bg-primary-violet-500"
                    content="Remove watermark"
                  />
                </div>
              </div>
            </div>
            {/* custom */}
            <div className="bg-[#2C323E] w-full lg:w-1/3 rounded-xl p-[8px]">
              <div className="bg-[#393F4A] border-[1px] w-full h-full rounded-xl p-[10px] lg:p-[25px]">
                <p className="font-nunito font-bold text-[14px] lg:text-[24px] text-white ">
                  Enterprise
                </p>
                <p className="font-nunito font-semibold text-[20px] lg:text-[45px] text-white ">
                  CUSTOM
                </p>
                <div className=" flex flex-col gap-1 mt-[17px] lg:mt-[24px]">
                  <p className="text-white text-[12px] lg:text-[14px]">
                    Dapatkan diskon spesial, kuota video lebih banyak, akses
                    API, dan layanan khusus untuk perusahaan Anda.
                  </p>
                </div>
                <div className="mt-[17px] lg:mt-[24px] w-full bg-white flex items-center justify-center py-[10px] rounded-xl cursor-pointer hover:bg-gradient-to-br from-[#7f52ff] to-[#FB8570] hover:text-white">
                  <p className="text-[12px] lg:text-[20px] ">Hubungi Kami</p>
                </div>
                <div className="w-full my-[28px] lg:my-[40px] flex items-center gap-[15px]">
                  <div className="bg-white bg-gradient-to-r from-[#393F4A] h-[2px] to-white w-full flex items-center justify-end">
                    <div className="h-[10px] aspect-square bg-white bg-opacity-50 rounded-full -mr-1 flex items-center justify-center">
                      <div className="h-[5px] aspect-square bg-white rounded-full "></div>
                    </div>
                  </div>
                  <div className="border-1 w-fit px-[10px] rounded-full border-white flex-shrink-0  ">
                    <p className="text-[10px] lg:text-[14px] text-white">WHAT YOU WILL GET</p>
                  </div>
                  <div className="bg-white bg-gradient-to-r from-white to-[#393F4A] h-[2px] w-full flex items-center justify-start">
                    <div className="h-[10px] aspect-square bg-white bg-opacity-50 rounded-full -ml-1 flex items-center justify-center">
                      <div className="h-[5px] aspect-square bg-white rounded-full "></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] lg:gap-[15px]">
                  <PricingList
                    color1="white"
                    color2="bg-[#393F4A]"
                    content="All features"
                  />
                  <PricingList
                    color1="white"
                    color2="bg-[#393F4A]"
                    content="Volume-based discounts"
                  />
                  <PricingList
                    color1="white"
                    color2="bg-[#393F4A]"
                    content="Fully custom API support"
                  />
                  <PricingList
                    color1="white"
                    color2="bg-[#393F4A]"
                    content="Custom terms"
                  />
                  <PricingList
                    color1="white"
                    color2="bg-[#393F4A]"
                    content="Dedicated account manager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import {
  BOALogo,
  Devin,
  Enzella,
  FemalePreneur,
  Mario,
  MasterBagasiLogo,
  Nadia,
  Qory,
  SelfmologyLogo,
} from "@/assets";
import { Arrow, Diamond } from "@/assets/SVG";
import Image from "next/image";
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

export default function ReviewComponent() {
  const [ref, { width }] = useMeasure();

  const [selected, setSelected] = useState(0);
  const data = [
    {
      id: 0,
      name: "Enzella",
      title: "Co-Founder Master Bagasi",
      image: Enzella,
      logo: MasterBagasiLogo,
      text: "Videfly ini kayak penyelamat buat kita! Bikin video buat promoin produk jadi gampang banget, nggak perlu jago ngedit lagi sih. Hasilnya juga keren!",
    },
    {
      id: 1,
      name: "Mario Devan",
      title: "CMO FemalePreneur",
      image: Mario,
      logo: FemalePreneur,
      text: "Videfly membantu usaha kecil membuat video produk keren tanpa biaya mahal atau cara yang rumit. Dengan Videfly, UMKM wanita di Femalepreneur bisa punya video menarik untuk jualan online dengan cepat dan mudah, cocok buat usaha siapa saja!",
    },
    {
      id: 2,
      name: "Nadia Tilem",
      title: "Content Creator",
      image: Nadia,
      logo: null,
      text: "Videfly mempermudah aku membuat video produk yang keren untuk brand kecantikan. Tanpa perlu ribet, aku bisa buat konten yang menarik dan profesional dalam hitungan menit. Sangat membantu untuk ide konten dan memudahkan pengelolaan media sosial!",
    },
    {
      id: 3,
      name: "Muhamad Qory",
      title: "CEO Beauty of Angel",
      image: Qory,
      logo: BOALogo,
      text: "Videfly membantu kami di Beauty of Angel menyiapkan alat pemasaran untuk reseller dan affiliate dengan lebih cepat dan efektif. Dengan Videfly, produktivitas tim meningkat, ROI juga naik, dan hasilnya semua pihak—dari tim hingga reseller—jadi lebih puas.",
    },
    {
      id: 4,
      name: "Davin Wilbert",
      title: "Co-Founder Master Bagasi",
      image: Devin,
      logo: SelfmologyLogo,
      text: "Videfly bikin Selfmology bisa buat video produk kecantikan secara otomatis, jadi nggak perlu ribet lagi! Semua konten promosi jadi cepet selesai, kita bisa fokus banget ke produk, sementara video tetap keren dan langsung ready.",
    },
  ];

  return (
    <div className="h-screen  flex ">
      <div className="w-5/12 py-[100px] px-[120px] flex flex-col justify-between">
        <div>
          <div className="flex items-center border-[1px] px-[11px] py-[2px] gap-[7px] rounded-full border-primary-violet-500 cursor-pointer w-fit">
            <Diamond color="#703be7" width={13} height={13} />
            <p className="text-primary-violet-500 text-[16px]">REVIEW</p>
          </div>
          <p className="font-nunito font-bold text-[48px] ">
            Apa yang Mereka Katakan?{" "}
          </p>
          <p className="text-[18px] ">
            videfly mempermudah brand owner, online seller marketer hingga
            startup bikin konten berkualitas
          </p>
        </div>
        <div className="flex gap-[20px] z-40">
          <div
            className={`bg-white w-fit p-[11px] rounded-full rotate-180 cursor-pointer ${
              selected === 0 ? "pointer-events-none" : ""
            }`}
            onClick={() => {
              setSelected(selected - 1);
              console.log(selected);
            }}
          >
            <Arrow width={59} height={59} />
            {selected === 0 && (
              <div className="bg-neutral-200 absolute h-full w-full rounded-full top-0 left-0 flex-shrink-0 opacity-70" />
            )}
          </div>
          <div
            className={`bg-white w-fit p-[11px] rounded-full cursor-pointer relative ${
              selected === data.length - 1 ? "pointer-events-none" : ""
            }`}
            onClick={() => setSelected(selected + 1)}
          >
            <Arrow width={59} height={59} />
            {selected === data.length - 1 && (
              <div className="bg-neutral-200 absolute h-full w-full rounded-full top-0 left-0 opacity-70" />
            )}
          </div>
        </div>
      </div>
      <motion.div className="w-7/12 flex overflow-x-hidden py-[10px]">
        <motion.div
          className="flex w-full"
          transition={{ duration: 0.5 }}
          animate={{
            x: -selected * width,
          }}
        >
          {data.map((e, i) => {
            return (
              <motion.div
                className="w-7/12 flex-shrink-0"
                key={i}
                // initial={{ opacity: 0, x: i < selected ? -100 : 100 }}
                animate={{
                  scale: i < selected ? 0.2 : 1,
                }}
                exit={{ opacity: 0, x: i < selected ? -1000 : 100 }}
                transition={{ duration: 0.5 }}
                ref={ref}
              >
                <ReviewCard
                  text={e.text}
                  name={e.name}
                  title={e.title}
                  picture={e.image}
                  logo={e.logo}
                  isActive={i === selected}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

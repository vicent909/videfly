"use client";
import { CobaGratis, Video } from "@/assets";
import { PencilStar, UserStar, VideoLogo } from "@/assets/SVG";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LinkProduk from "./LinkProduk";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";

export default function HeroComponent() {
  const [ref, { height }] = useMeasure();
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState("");
  const [selected, setSelected] = useState("");

  const yTranslation = useMotionValue(0);
  const yTranslation2 = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -height - 30;

    controls = animate(yTranslation, [finalPosition, 0], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [yTranslation, height]);

  useEffect(() => {
    let controls;
    let finalPosition = -height - 30;

    controls = animate(yTranslation2, [0, finalPosition], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [yTranslation2, height]);

  return (
    <div className="w-5/6 mx-auto h-full flex items-start overflow-hidden relative">
      <div className="w-1/2 h-screen py-[54px] flex flex-col justify-between items-start">
        <div />
        <div>
          <div className="flex items-center gap-4">
            <p className="font-nunito font-extrabold text-[64px]">Sulap</p>
            <LinkProduk />
          </div>
          <p className="font-nunito font-extrabold text-[64px] ">
            Jadi Video dalam <br />
            Sekejap!
          </p>
          <p className="text-[20px] font-poppins text-neutral-400 ">
            Pakai Videfly, nggak perlu repot bikin konten yang nge-hits!
          </p>
          <p className="text-[20px] font-poppins text-neutral-400 ">
            Tinggal klik, bagikan dan jadi viral!
          </p>
          <div className="mt-[30px] bg-gradient-to-br from-[#7f52ff] to-[#FB8570] w-fit text-white py-[10px] px-[20px] rounded-xl text-[20px] flex gap-[15px] cursor-pointer ">
            <p>Coba Gratis</p>
            <Image src={CobaGratis} alt="coba-gratis" />
          </div>
        </div>
        <div className="flex gap-[15px]">
          <div className="border-[#545454] border-[1px] rounded-[24px] w-fit px-[15px] py-[10px] cursor-pointer ">
            <p>Auto Caption</p>
          </div>
          <div className="border-[1px] rounded-[24px] w-fit cursor-pointer gradientBorder">
            <p className="bg-gradient-to-br from-[#7f52ff] to-[#FB8570] bg-clip-text text-transparent">URL to Video</p>
          </div>
          <div className="border-[#545454] border-[1px] rounded-[24px] w-fit px-[15px] py-[10px] cursor-pointer ">
            <p>Content Calendar</p>
          </div>
          <div className="border-[#545454] border-[1px] rounded-[24px] w-fit px-[15px] py-[10px] cursor-pointer ">
            <p>Brand Kit</p>
          </div>
        </div>
      </div>
      <motion.div
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="flex flex-col items-center justify-center h-full pr-[30px] "
      >
        <div
          onMouseEnter={() => setIsHover("video")}
          onMouseLeave={() => setIsHover("")}
          onClick={() => setSelected("video2")}
          className="w-[50px] aspect-square bg-neutral-100 flex items-center justify-center rounded-full hover:bg-gradient-to-br from-[#7f52ff] to-[#FB8570] mb-[20px] cursor-pointer"
        >
          <VideoLogo color={isHover === "video" ? "#ffffff" : "#545454"} />
        </div>
        <div
          onMouseEnter={() => setIsHover("user")}
          onMouseLeave={() => setIsHover("")}
          onClick={() => setSelected("video3")}
          className="w-[50px] aspect-square bg-neutral-100 flex items-center justify-center rounded-full hover:bg-gradient-to-br from-[#7f52ff] to-[#FB8570] mb-[20px] cursor-pointer"
        >
          <UserStar color={isHover === "user" ? "#ffffff" : "#545454"} />
        </div>
        <div
          onMouseEnter={() => setIsHover("pencil")}
          onMouseLeave={() => setIsHover("")}
          onClick={() => setSelected("video4")}
          className="w-[50px] aspect-square bg-neutral-100 flex items-center justify-center rounded-full hover:bg-gradient-to-br from-[#7f52ff] to-[#FB8570] mb-[20px] cursor-pointer"
        >
          <PencilStar color={isHover === "pencil" ? "#ffffff" : "#545454"} />
        </div>
        <motion.div
          initial={{ height: "0px", opacity: 1}}
          animate={{
            height: isOpen ? "auto" : "0px",
            opacity: isOpen ? 1 : 1,
            // y: isOpen ? 0 : 1000
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="overflow-hidden"
        >
          <div
            onMouseEnter={() => setIsHover("video2")}
            onMouseLeave={() => setIsHover("")}
            onClick={() => setSelected("video2")}
            className="w-[50px] aspect-square bg-neutral-100 flex items-center justify-center rounded-full hover:bg-gradient-to-br from-[#7f52ff] to-[#FB8570] mb-[20px] cursor-pointer"
          >
            <VideoLogo color={isHover === "video2" ? "#ffffff" : "#545454"} />
          </div>
          <div
            onMouseEnter={() => setIsHover("user2")}
            onMouseLeave={() => setIsHover("")}
            onClick={() => setSelected("video5")}
            className="w-[50px] aspect-square bg-neutral-100 flex items-center justify-center rounded-full hover:bg-gradient-to-br from-[#7f52ff] to-[#FB8570] mb-[20px] cursor-pointer"
          >
            <UserStar color={isHover === "user2" ? "#ffffff" : "#545454"} />
          </div>
          <div
            onClick={() => setSelected("")}
            className="w-[50px] aspect-square bg-neutral-100 flex items-center justify-center rounded-full hover:bg-gradient-to-br from-[#7f52ff] to-[#FB8570] mb-[20px] cursor-pointer"
          >
            <p className="text-neutral-400 font-bold text-[28px] flex items-center justify-center pb-[1px]">
              x
            </p>
          </div>
        </motion.div>
        {/* for plus */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-[25px] cursor-pointer aspect-square bg-transparent border-[1px] border-neutral-400 flex items-center justify-center rounded-full overflow-hidden"
        >
          <p className="text-neutral-400 font-bold text-[20px] flex items-center justify-center pb-[1px]">
            {isOpen ? "x" : "+"}
          </p>
        </div>
      </motion.div>
      {selected === "" && (
        <div className=" w-1/2 h-screen flex gap-[30px] z-10">
          <motion.div
            className="h-full w-1/2 pt-[88px] flex flex-col gap-[50px]"
            style={{ y: yTranslation }}
            ref={ref}
          >
            <img
              className="rounded-xl"
              src="https://s3-alpha-sig.figma.com/img/33fe/b421/7f6113ddb7b56b5af72fa8794c90fa92?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASUqP8d0OWRMR5lZSE7wuH2KDQVySxysRru7lJlFUAiNEuIzcUl8qaPpIsWd0vmNP0hehh6E8W5VYcFdrHaL1Fkoic8v6IUpEMPOohEQxCRcc~R88t0-qHu8l5ulTB2EFd6LKXiiDMIdqcRZS53XWQs6RnJ15ozeqJ0BoLLt6Ayi8r4HA4YyAg07Qm~NxwDSmCbrSCtHRpycdEBdWScUPotQ2dG9dpnNUC2t-3QB85cvKg08rN698NhfZtxSDg0JFFYnwuc9A4YCPJOZMmrMYEnxwYrsBdZf0jaewlnKTUKZPr5Djj7GSxiPZbT7nOKt9lzwaSjyfHq1afLM~3kbnA__"
            />
            <video
              src={"./video2.mp4"}
              autoPlay
              loop
              muted
              className="rounded-xl"
            />
            <video
              src={"./video3.mp4"}
              autoPlay
              loop
              muted
              className="rounded-xl"
            />
          </motion.div>
          <motion.div
            className="h-full w-1/2 relative flex flex-col gap-[50px] "
            style={{ y: yTranslation2 }}
          >
            <video
              src={"./video5.mp4"}
              autoPlay
              loop
              muted
              className="rounded-xl"
            />
            <img
              className="rounded-xl"
              src="https://s3-alpha-sig.figma.com/img/33fe/b421/7f6113ddb7b56b5af72fa8794c90fa92?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASUqP8d0OWRMR5lZSE7wuH2KDQVySxysRru7lJlFUAiNEuIzcUl8qaPpIsWd0vmNP0hehh6E8W5VYcFdrHaL1Fkoic8v6IUpEMPOohEQxCRcc~R88t0-qHu8l5ulTB2EFd6LKXiiDMIdqcRZS53XWQs6RnJ15ozeqJ0BoLLt6Ayi8r4HA4YyAg07Qm~NxwDSmCbrSCtHRpycdEBdWScUPotQ2dG9dpnNUC2t-3QB85cvKg08rN698NhfZtxSDg0JFFYnwuc9A4YCPJOZMmrMYEnxwYrsBdZf0jaewlnKTUKZPr5Djj7GSxiPZbT7nOKt9lzwaSjyfHq1afLM~3kbnA__"
            />
            <video
              src={"./video4.mp4"}
              autoPlay
              loop
              muted
              className="rounded-xl"
            />
          </motion.div>
        </div>
      )}
      {selected && (
        <div className=" w-1/2 h-screen flex z-10 flex-wrap items-center justify-center pt-[85px] pb-[10px] ">
          <video
            src={`./${selected}.mp4`}
            autoPlay
            loop
            muted
            className="rounded-xl h-full flex-shrink"
          />
        </div>
      )}
    </div>
  );
}

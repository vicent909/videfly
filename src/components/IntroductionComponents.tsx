"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClockLogo, MoneyCircle, MoneyCycle } from "@/assets/SVG";
import MovingMarketplace from "./MovingMarketplace";

export default function IntroductionComponents() {
  const ref = useRef(null);
  const refMobile = useRef(null);
  const refTablet = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const isInViewMobile = useInView(refMobile, { once: true, amount: 0.5 });
  const isInViewTablet = useInView(refTablet, { once: true, amount: 0.5 });

  return (
    <div className="h-screen relative w-full flex justify-center items-center">
      {/* desktop view */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                opacity: [0, 1, 1, 0],
              }
            : {}
        }
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.1, 0.99, 1],
          delay: 0.5,
        }}
        className="absolute hidden lg:inline"
      >
        <p className="font-nunito font-bold text-[64px] " ref={ref}>
          Kenalin{" "}
          <span className="bg-gradient-to-br from-[#7f52ff] to-[#FB8570] bg-clip-text text-transparent">
            Videfly
          </span>
        </p>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                opacity: [0, 1],
              }
            : {}
        }
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          delay: 2.5,
          ease: "easeInOut",
          times: [0, 1],
        }}
        className="absolute hidden lg:flex items-start justify-start gap-[8px] h-full w-full overflow-x-hidden"
      >
        <div className="flex w-full h-full relative">
          <motion.div
            initial={{
              x: 0,
            }}
            animate={
              isInView
                ? {
                    x: -300,
                  }
                : {}
            }
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 4,
            }}
            className=" h-full w-1/2 flex flex-col items-end justify-center relative"
          >
            <p className="font-nunito font-bold text-[64px] absolute top-[50%] translate-y-[-50%] right-1 bg-gradient-to-br from-[#7f52ff] to-[#FB8570] bg-clip-text text-transparent">
              Smart AI
            </p>
            <motion.p
              className="text-[18px] pt-[143px]"
              initial={{
                opacity: 0,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 4,
              }}
            >
              Buat video berkualitas tanpa ribet <br />
              dengan teknologi pintar Videfly
            </motion.p>
            <motion.div
              initial={{
                x: -1000,
              }}
              animate={
                isInView
                  ? {
                      x: 80,
                    }
                  : {}
              }
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 4,
                type: "spring",
              }}
              className="bg-white shadow-navbar flex gap-[15px] items-center p-[15px] rounded-xl absolute top-[168px]"
            >
              <div className="bg-gradient-to-br from-[#7f52ff] to-[#FB8570] p-[14px] rounded-xl w-fit h-fit">
                <ClockLogo color="#ffffff" width={40} height={40} />
              </div>
              <div>
                <p className="font-semibold text-[24px]">70%</p>
                <p>Produktivitas meningkat</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="h-screen absolute flex justify-center items-end right-0 left-0 rounded-xl overflow-hidden pt-[150px] py-[242px]">
            <motion.img
              className="rounded-3xl"
              src="https://s3-alpha-sig.figma.com/img/33fe/b421/7f6113ddb7b56b5af72fa8794c90fa92?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASUqP8d0OWRMR5lZSE7wuH2KDQVySxysRru7lJlFUAiNEuIzcUl8qaPpIsWd0vmNP0hehh6E8W5VYcFdrHaL1Fkoic8v6IUpEMPOohEQxCRcc~R88t0-qHu8l5ulTB2EFd6LKXiiDMIdqcRZS53XWQs6RnJ15ozeqJ0BoLLt6Ayi8r4HA4YyAg07Qm~NxwDSmCbrSCtHRpycdEBdWScUPotQ2dG9dpnNUC2t-3QB85cvKg08rN698NhfZtxSDg0JFFYnwuc9A4YCPJOZMmrMYEnxwYrsBdZf0jaewlnKTUKZPr5Djj7GSxiPZbT7nOKt9lzwaSjyfHq1afLM~3kbnA__"
              initial={{
                height: "40%",
                opacity: 0,
              }}
              animate={
                isInView
                  ? {
                      height: "100%",
                      opacity: [0, 1],
                    }
                  : {}
              }
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 4,
              }}
            />
          </motion.div>
          <motion.div
            initial={{
              x: 0,
            }}
            animate={
              isInView
                ? {
                    x: 300,
                  }
                : {}
            }
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 4,
            }}
            className=" h-full w-1/2 flex items-center relative"
          >
            <p className="font-nunito font-bold text-[64px] bg-gradient-to-br from-[#7f52ff] to-[#FB8570] bg-clip-text text-transparent absolute top-[50%] translate-y-[-50%] left-1">
              Video Maker
            </p>
            <motion.div
              initial={{
                x: 1000,
              }}
              animate={
                isInView
                  ? {
                      x: -180,
                    }
                  : {}
              }
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 4,
                type: "spring",
              }}
              className="bg-white shadow-navbar flex gap-[15px] items-center p-[15px] rounded-xl absolute top-[63px] min-w-[269px]"
            >
              <div className="bg-gradient-to-br from-[#7f52ff] to-[#FB8570] p-[14px] rounded-xl w-fit h-fit">
                <MoneyCycle color="#ffffff" height={40} width={40} />
              </div>
              <div>
                <p className="font-semibold text-[24px]">50%</p>
                <p>Kenaikan ROI</p>
              </div>
            </motion.div>
            <motion.div
              initial={{
                x: 1000,
                y: 150,
              }}
              animate={
                isInView
                  ? {
                      x: 50,
                    }
                  : {}
              }
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 4,
                type: "spring",
              }}
              className="bg-white shadow-navbar flex gap-[15px] items-center p-[15px] rounded-xl absolute q min-w-[269px]"
            >
              <div className="bg-gradient-to-br from-[#7f52ff] to-[#FB8570] p-[14px] rounded-xl w-fit h-fit">
                <MoneyCircle color="#ffffff" height={40} width={40} />
              </div>
              <div>
                <p className="font-semibold text-[24px]">50X</p>
                <p>Lebih hemat</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute bottom-11 w-full flex items-center gap-[80px]"
          >
            {/* {[...marketplace, ...marketplace].map((e, i) => {
              return <Image alt="image" src={e} key={i}/>;
            })} */}
            <MovingMarketplace />
          </motion.div>
        </div>
      </motion.div>
      {/* end of desktop view */}

      {/* mobile view */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={
          isInViewMobile
            ? {
                opacity: [0, 1, 1, 0],
              }
            : {}
        }
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.1, 0.99, 1],
          delay: 0.5,
        }}
        className="absolute md:hidden"
      >
        <p className="font-nunito font-bold text-[30px] " ref={refMobile}>
          Kenalin{" "}
          <span className="bg-gradient-to-br from-[#7f52ff] to-[#FB8570] bg-clip-text text-transparent">
            Videfly
          </span>
        </p>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={
          isInViewMobile
            ? {
                opacity: [0, 1],
              }
            : {}
        }
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 2.5,
          ease: "easeInOut",
          times: [0, 1],
        }}
        className="absolute md:hidden flex items-start justify-start gap-[8px] h-full w-full overflow-hidden"
      >
        <div className="flex flex-col w-full h-full relative">
          <motion.div
            initial={{
              y: 0,
            }}
            animate={
              isInViewMobile
                ? {
                    y: "-80%",
                  }
                : {}
            }
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 4,
            }}
            className="h-full w-full flex flex-col items-center justify-end"
          >
            <p className="font-nunito font-bold text-[30px]">Smart AI</p>
            <motion.p
              className="text-[12px] absolute text-center bottom-0"
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={
                isInViewMobile
                  ? {
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 4,
              }}
            >
              Buat video produk profesional tanpa keahlian <br /> editing, hemat
              biaya dan sat-set!
            </motion.p>
          </motion.div>
          {/* <motion.div className="h-full absolute flex justify-center items-end right-0 left-0 rounded-xl overflow-hidden pt-[180px] py-[242px] bg-red-50 "> */}
          <motion.div className="h-full absolute flex justify-center items-end right-0 left-0 rounded-xl overflow-hidden pt-[38%] py-[45%]">
            <motion.img
              className="rounded-3xl"
              src="https://s3-alpha-sig.figma.com/img/33fe/b421/7f6113ddb7b56b5af72fa8794c90fa92?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASUqP8d0OWRMR5lZSE7wuH2KDQVySxysRru7lJlFUAiNEuIzcUl8qaPpIsWd0vmNP0hehh6E8W5VYcFdrHaL1Fkoic8v6IUpEMPOohEQxCRcc~R88t0-qHu8l5ulTB2EFd6LKXiiDMIdqcRZS53XWQs6RnJ15ozeqJ0BoLLt6Ayi8r4HA4YyAg07Qm~NxwDSmCbrSCtHRpycdEBdWScUPotQ2dG9dpnNUC2t-3QB85cvKg08rN698NhfZtxSDg0JFFYnwuc9A4YCPJOZMmrMYEnxwYrsBdZf0jaewlnKTUKZPr5Djj7GSxiPZbT7nOKt9lzwaSjyfHq1afLM~3kbnA__"
              initial={{
                height: "40%",
                opacity: 0,
              }}
              animate={
                isInViewMobile
                  ? {
                      height: "100%",
                      opacity: [0, 1],
                    }
                  : {}
              }
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 4,
              }}
            />
          </motion.div>
          <motion.div
            initial={{
              y: 0,
            }}
            animate={
              isInViewMobile
                ? {
                    y: "60%",
                  }
                : {}
            }
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 4,
            }}
            className=" h-full w-full flex items-start justify-center relative"
          >
            <p className="font-nunito font-bold text-[30px] bg-gradient-to-br from-[#7f52ff] to-[#FB8570] bg-clip-text text-transparent">
              Video Maker
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={
              isInViewMobile
                ? {
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute bottom-0 w-full items-center xs:bg-red-50"
          >
            <MovingMarketplace />
          </motion.div>
          <motion.div
            initial={{
              x: 2000,
            }}
            animate={
              isInViewMobile
                ? {
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 4,
              type: "spring",
            }}
            className="bg-white shadow-navbar h-fit flex gap-[15px] items-center p-[8px] rounded-xl absolute right-[5%] bottom-[35%]  translate-y-1/2 "
          >
            <div className="bg-gradient-to-br from-[#7f52ff] to-[#FB8570] p-[5px] rounded-md w-fit h-fit">
              <ClockLogo color="#ffffff" width={18} height={18} />
            </div>
            <div>
              <p className="font-semibold text-[12px]">70%</p>
              <p className="text-[8px]">Produktivitas meningkat</p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: 2000,
            }}
            animate={
              isInViewMobile
                ? {
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 4,
              type: "spring",
            }}
            className="bg-white shadow-navbar flex gap-[15px] items-center p-[8px] rounded-xl absolute min-w-[105px] right-[5%] top-[25%] -translate-y-1/2"
          >
            <div className="bg-gradient-to-br from-[#7f52ff] to-[#FB8570] p-[5px] rounded-md w-fit h-fit">
              <MoneyCycle color="#ffffff" height={18} width={18} />
            </div>
            <div>
              <p className="font-semibold text-[12px]">50%</p>
              <p className="text-[8px]">Kenaikan ROI</p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: -2000,
            }}
            animate={
              isInViewMobile
                ? {
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 4,
              type: "spring",
            }}
            className="bg-white shadow-navbar flex gap-[15px] items-center p-[8px] rounded-xl absolute min-w-[105px] left-[5%] top-1/2 -translate-y-1/2"
          >
            <div className="bg-gradient-to-br from-[#7f52ff] to-[#FB8570] p-[5px] rounded-md w-fit h-fit">
              <MoneyCircle color="#ffffff" height={18} width={18} />
            </div>
            <div>
              <p className="font-semibold text-[12px]">50X</p>
              <p className="text-[8px]">Lebih hemat</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* end of mobile view */}

      {/* Tablet view */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={
          isInViewTablet
            ? {
                opacity: [0, 1, 1, 0],
              }
            : {}
        }
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.1, 0.99, 1],
          delay: 0.5,
        }}
        className="hidden md:inline lg:hidden absolute"
        
      >
        <p className="font-nunito font-bold text-[40px] " ref={refTablet}>
          Kenalin{" "}
          <span className="bg-gradient-to-br from-[#7f52ff] to-[#FB8570] bg-clip-text text-transparent">
            Videfly
          </span>
        </p>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={
          isInViewTablet
            ? {
                opacity: [0, 1],
              }
            : {}
        }
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          delay: 2.5,
          ease: "easeInOut",
          times: [0, 1],
        }}
        className="hidden md:flex lg:hidden items-start justify-start gap-[8px] h-full w-full overflow-hidden"
      >
        <div className="flex flex-col w-full h-full relative">
          <motion.div
            initial={{
              y: 0,
            }}
            animate={
              isInViewTablet
                ? {
                    y: "-80%",
                  }
                : {}
            }
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 4,
            }}
            className="h-full w-full flex flex-col items-center justify-end"
          >
            <p className="font-nunito font-bold text-[40px]">Smart AI</p>
            <motion.p
              className="text-[12px] absolute text-center bottom-0"
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={
                isInViewTablet
                  ? {
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 4,
              }}
            >
              Buat video produk profesional tanpa keahlian <br /> editing, hemat
              biaya dan sat-set!
            </motion.p>
          </motion.div>
          {/* <motion.div className="h-full absolute flex justify-center items-end right-0 left-0 rounded-xl overflow-hidden pt-[180px] py-[242px] bg-red-50 "> */}
          <motion.div className="h-full absolute flex justify-center items-end right-0 left-0 rounded-xl overflow-hidden pt-[25%] py-[35%]">
            <motion.img
              className="rounded-3xl"
              src="https://s3-alpha-sig.figma.com/img/33fe/b421/7f6113ddb7b56b5af72fa8794c90fa92?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASUqP8d0OWRMR5lZSE7wuH2KDQVySxysRru7lJlFUAiNEuIzcUl8qaPpIsWd0vmNP0hehh6E8W5VYcFdrHaL1Fkoic8v6IUpEMPOohEQxCRcc~R88t0-qHu8l5ulTB2EFd6LKXiiDMIdqcRZS53XWQs6RnJ15ozeqJ0BoLLt6Ayi8r4HA4YyAg07Qm~NxwDSmCbrSCtHRpycdEBdWScUPotQ2dG9dpnNUC2t-3QB85cvKg08rN698NhfZtxSDg0JFFYnwuc9A4YCPJOZMmrMYEnxwYrsBdZf0jaewlnKTUKZPr5Djj7GSxiPZbT7nOKt9lzwaSjyfHq1afLM~3kbnA__"
              initial={{
                height: "40%",
                opacity: 0,
              }}
              animate={
                isInViewTablet
                  ? {
                      height: "100%",
                      opacity: [0, 1],
                    }
                  : {}
              }
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 4,
              }}
            />
          </motion.div>
          <motion.div
            initial={{
              y: 0,
            }}
            animate={
              isInViewTablet
                ? {
                    y: "60%",
                  }
                : {}
            }
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 4,
            }}
            className=" h-full w-full flex items-start justify-center relative"
          >
            <p className="font-nunito font-bold text-[40px] bg-gradient-to-br from-[#7f52ff] to-[#FB8570] bg-clip-text text-transparent">
              Video Maker
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={
              isInViewTablet
                ? {
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute bottom-[5%] w-full items-center xs:bg-red-50"
          >
            <MovingMarketplace />
          </motion.div>
          <motion.div
            initial={{
              x: 2000,
            }}
            animate={
              isInViewTablet
                ? {
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 4,
              type: "spring",
            }}
            className="bg-white shadow-navbar h-fit flex gap-[15px] items-center p-[9px] rounded-xl absolute right-[15%] bottom-[35%]  translate-y-1/2 "
          >
            <div className="bg-gradient-to-br from-[#7f52ff] to-[#FB8570] p-[8.5px] rounded-md w-fit h-fit">
              <ClockLogo color="#ffffff" width={24} height={24} />
            </div>
            <div>
              <p className="font-semibold text-[15px]">70%</p>
              <p className="text-[10px]">Produktivitas meningkat</p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: 2000,
            }}
            animate={
              isInViewTablet
                ? {
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 4,
              type: "spring",
            }}
            className="bg-white shadow-navbar flex gap-[15px] items-center p-[9px] rounded-xl absolute min-w-[162px] right-[15%] top-[25%] -translate-y-1/2"
          >
            <div className="bg-gradient-to-br from-[#7f52ff] to-[#FB8570] p-[8.5px] rounded-md w-fit h-fit">
              <MoneyCycle color="#ffffff" height={24} width={24} />
            </div>
            <div>
              <p className="font-semibold text-[15px]">50%</p>
              <p className="text-[10px]">Kenaikan ROI</p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: -2000,
            }}
            animate={
              isInViewTablet
                ? {
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 4,
              type: "spring",
            }}
            className="bg-white shadow-navbar flex gap-[15px] items-center p-[9px] rounded-xl absolute min-w-[162px] left-[15%] top-1/2 -translate-y-1/2"
          >
            <div className="bg-gradient-to-br from-[#7f52ff] to-[#FB8570] p-[8.5px] rounded-md w-fit h-fit">
              <MoneyCircle color="#ffffff" height={24} width={24} />
            </div>
            <div>
              <p className="font-semibold text-[15px]">50X</p>
              <p className="text-[10px]">Lebih hemat</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* end of Tablet view */}
    </div>
  );
}

import HeroComponent from "@/components/HeroComponent";
import IntroductionComponents from "@/components/IntroductionComponents";
import Navbar from "@/components/Navbar";
import StepLightComponent from "@/components/StepLightComponent";
import ValuePointComponent from "@/components/ValuePointComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="h-screen">
        <HeroComponent />
      </div>
      <section id="#kedua">
        <div className="min-h-screen">
          <IntroductionComponents />
        </div>
      </section>
      <section id="#stepLight">
        <div className="min-h-screen">
          <StepLightComponent />
        </div>
      </section>
      <section id="#valuePoint">
        <div className="h-fit">
          <ValuePointComponent />
        </div>
      </section>
    </div>
  );
}

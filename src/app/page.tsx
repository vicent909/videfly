import CallCenterComponent from "@/components/CallCenterComponent";
import FAQComponent from "@/components/FAQComponent";
import FooterComponent from "@/components/FooterComponent";
import HeroComponent from "@/components/HeroComponent";
import IntroductionComponents from "@/components/IntroductionComponents";
import Navbar from "@/components/Navbar";
import PricingComponent from "@/components/PricingComponent";
import ReviewComponent from "@/components/ReviewComponent";
import StepLightComponent from "@/components/StepLightComponent";
import ValuePointComponent from "@/components/ValuePointComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* <Navbar />
      <div className="lg:h-screen h-fit">
        <HeroComponent />
      </div>
      <section id="#introduction">
        <div className="min-h-screen">
          <IntroductionComponents />
        </div>
      </section>
      <section id="#step-light">
        <div className="h-fit lg:min-h-screen">
          <StepLightComponent />
        </div>
      </section>
      <section id="#value-point">
        <div className="h-fit">
          <ValuePointComponent />
        </div>
      </section> */}
      <section id="#pricing">
        <div className="h-fit">
          <PricingComponent />
        </div>
      </section>
      {/* <section id="#review">
        <div className="h-screen">
          <ReviewComponent />
        </div>
      </section>
      <section id="#faq">
        <div className="">
          <FAQComponent />
        </div>
      </section>
      <section id="#call-center">
        <div className="">
          <CallCenterComponent />
        </div>
      </section>
      <section id="#footer">
        <div className="">
          <FooterComponent />
        </div>
      </section> */}
    </div>
  );
}

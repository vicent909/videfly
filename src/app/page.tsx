import HeroComponent from "@/components/HeroComponent";
import IntroductionComponents from "@/components/IntroductionComponents";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <HeroComponent />
      </div>
      <section id="#kedua">
        <div className="min-h-screen">
          <IntroductionComponents />
        </div>
      </section>
    </div>
  );
}

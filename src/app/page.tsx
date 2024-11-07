import HeroComponent from "@/components/HeroComponent";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <HeroComponent />
      </div>
      <div className="min-h-screen bg-red-50">a</div>
    </div>
  );
}

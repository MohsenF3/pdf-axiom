import HeroSection from "@/components/home/hero-section";
import dynamic from "next/dynamic";

const CallToAction = dynamic(() => import("@/components/home/call-to-action"));

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />

      <CallToAction />
    </div>
  );
}

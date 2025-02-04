import HeroSection from "@/components/home/hero-section";
import dynamic from "next/dynamic";

const CallToAction = dynamic(() => import("@/components/home/call-to-action"));
const GlobeFeaturesSection = dynamic(
  () => import("@/components/home/globe-features-section"),
);

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />

      <GlobeFeaturesSection />

      <CallToAction />
    </div>
  );
}

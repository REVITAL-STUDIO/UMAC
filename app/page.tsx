import Collaboration from "@/components/Collaboration";
import Founders from "@/components/FoundersCorner";
import Hero from "@/components/Hero";
import Potential from "@/components/Potential";
import RecruitingCTA from "@/components/RecruitingCTA";
import Transform from "@/components/Transform";
import TrustSlides from "@/components/TrustSlides";

export default function Home() {
  return (
    <main>
      <Hero />
      <Collaboration />
      <Potential />
      <TrustSlides />
      <Transform />
      <RecruitingCTA />
      <Founders />
    </main>
  );
}

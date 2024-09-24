// import BulletItem from "@/components/BulletItem";
import Collaboration from "@/components/Collaboration";
import Founders from "@/components/foundersCorner";
import Hero from "@/components/Hero";
import Potential from "@/components/Potential";
import Transform from "@/components/Transform";
import TrustSlides from "@/components/trustSlides";


export default function Home() {
  return (
    <main>
      <Hero />
      <Collaboration />
      <Potential />
      <TrustSlides />
      <Transform />
      <Founders />
    </main>
  );
}

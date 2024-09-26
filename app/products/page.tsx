import Empower from "@/components/Empower";
import HighQuality from "@/components/highQuality";
import Industry from "@/components/Industry";
import Nav from "@/components/Nav";
import ProductIntro from "@/components/productIntro";
import Solution from "@/components/Solution";

export default function Products() {
  return (
    <main>
      <Nav />
      <ProductIntro />
      <HighQuality />
      <Industry />
      <Empower />
      <Solution />
    </main>
  );
}
